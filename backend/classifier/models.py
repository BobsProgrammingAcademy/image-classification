import cv2
import os
import ssl
import numpy as np
import tensorflow as tf
from django.conf import settings
from django.db import models
from PIL import Image


class Classifier(models.Model):
    image = models.ImageField(upload_to='images')
    result = models.CharField(max_length=250, blank=True)
    date_uploaded = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return 'Image classfied at {}'.format(self.date_uploaded.strftime('%Y-%m-%d %H:%M'))
    
    def save(self, *args, **kwargs):
        try:
            # SSL certificate necessary so we can download weights of the InceptionResNetV2 model
            ssl._create_default_https_context = ssl._create_unverified_context

            img = Image.open(self.image)
            img_array = tf.keras.preprocessing.image.img_to_array(img)
            dimensions = (299, 299)

            # Interpolation - a method of constructing new data points within the range
            # of a discrete set of known data points.
            resized_image = cv2.resize(img_array, dimensions, interpolation=cv2.INTER_AREA)
            ready_image = np.expand_dims(resized_image, axis=0)
            ready_image = tf.keras.applications.inception_resnet_v2.preprocess_input(ready_image)

            model = tf.keras.applications.InceptionResNetV2(weights='imagenet')
            prediction = model.predict(ready_image)
            decoded = tf.keras.applications.inception_resnet_v2.decode_predictions(prediction)[0][0][1]
            self.result = str(decoded)
            print('Success')
        except Exception as e:
            print('Classification failed:', e)

        return super().save(*args, **kwargs)
