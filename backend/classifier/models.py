
import numpy as np
import pandas as pd
from sklearn.impute import SimpleImputer
from sklearn.model_selection import train_test_split, KFold
from sklearn.preprocessing import LabelBinarizer, LabelEncoder, StandardScaler
import matplotlib.pyplot as plt
from sklearn.metrics import accuracy_score, confusion_matrix, f1_score, classification_report
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import GridSearchCV
from sklearn.tree import DecisionTreeClassifier,export_graphviz
from sklearn.metrics import balanced_accuracy_score
from sklearn.ensemble import RandomForestClassifier
from imblearn.over_sampling import RandomOverSampler, SMOTE, BorderlineSMOTE, ADASYN
from imblearn.ensemble import BalancedRandomForestClassifier
from sklearn.svm import SVC
from sklearn.ensemble import BaggingClassifier
from sklearn.model_selection import cross_validate
from statistics import mean
from imblearn.under_sampling import RandomUnderSampler, TomekLinks
from sklearn import metrics
import graphviz
from collections import Counter
from subprocess import call
import pickle
import seaborn as sns
##from google.colab import drive
#drive.mount('/content/drive')
'''
#read PLCO data March 2022
dataPLCO = pd.read_csv('PLCO.csv')
data19= pd.read_csv('adult19.csv')
data20=pd.read_csv('adult20.csv')
data21=pd.read_csv('adult21.csv')
dataNHIS = pd.concat([data19, data20, data21])

#Select relevant input features from datasets and merge them
#Inputs: Family History (Ovarian and Breast cancer), Body Type (BMI, Weight,Height), NSAIDS (Aspirin and Ibuprofen intake), Diseases (Arthritis, Hypertension,Diabetes, Osteoporosis, and Colorectal Polyps), and Smoking
dataPL_subset=dataPLCO[['ovar_cancer','height_f','weight_f','diabetes_f','hyperten_f','fh_cancer','breast_fh','breast_fh_age','breast_fh_cnt','ovarsumm_fh','ovarsumm_fh_age','ovarsumm_fh_cnt']]

#print(dataPL_subset.describe())
dataNH_subset = dataNHIS[['OVARYCAN_A','HEIGHTTC_A','WEIGHTLBTC_A','DIBEV_A','HYPEV_A','ASPMEDEV_A','RX12M_A','PAIAPG3M_A','PHQ85_A','DIFF_A']]

# Rename weight column in dataNHIS to match name in dataPLCO
dataNH_subset = dataNH_subset.rename(columns={'WEIGHTLBTC_A': 'weight_f', 'HEIGHTTC_A':'height_f','DIBEV_A': 'diabetes_f','HYPEV_A':'hyperten_f','OVARYCAN_A': 'ovar_cancer'})
#print(dataNH_subset.describe())

# Combine dataPLCO and dataNHIS
merged_data = pd.concat([dataPL_subset, dataNH_subset])


merged_data = merged_data.dropna(subset=['ovar_cancer'])


merged_datax=merged_data.drop(columns=['ovar_cancer'])

#imputing numeric values with mean value
merged_datax[['weight_f', 'height_f', 'breast_fh_age', 'breast_fh_cnt', 'ovarsumm_fh_age', 'ovarsumm_fh_cnt']] = merged_datax[['weight_f', 'height_f', 'breast_fh_age', 'breast_fh_cnt', 'ovarsumm_fh_age', 'ovarsumm_fh_cnt']].fillna(merged_datax[['weight_f', 'height_f', 'breast_fh_age', 'breast_fh_cnt', 'ovarsumm_fh_age', 'ovarsumm_fh_cnt']].mean())

# Imputing missing categorical values with mode
imputer = SimpleImputer(missing_values=np.NaN, strategy='most_frequent')
x_merged_df = imputer.fit_transform(merged_datax)

print(x_merged_df.shape)
print(x_merged_df)


#Output column
ydata_subset = merged_data['ovar_cancer']
print(ydata_subset.describe())
print(ydata_subset.shape)
'''
#read PLCO data March 2022 and NHIS 2019,2020 and 2021
dataPLCO = pd.read_csv('PLCO.csv')

data19= pd.read_csv('adult19.csv')
data20=pd.read_csv('adult20.csv')
data21=pd.read_csv('adult21.csv')
dataNHIS = pd.concat([data19, data20, data21])
#Select all rows from all NHIS dataset where sex != 1 (male)
dataNHIS = dataNHIS[dataNHIS.SEX_A != 1]

#Select relevant input features from datasets and merge them

columns_to_drop =['ovar_reasfoll', 'ovar_reassurv', 'ovar_reassymp', 'ovar_reasoth', 'ovar_intstat_cat', 'ovar_annyr', 
'ovar_cancer_site', 'ovar_stage', 'ovar_stage_7e', 'ovar_stage_t', 'ovar_stage_n', 'ovar_stage_m', 'ovar_clinstage', 
'ovar_clinstage_7e', 'ovar_clinstage_t', 'ovar_clinstage_n', 'ovar_clinstage_m', 'ovar_pathstage', 'ovar_pathstage_7e', 
'ovar_pathstage_t', 'ovar_pathstage_n', 'ovar_pathstage_m', 'ovar_grade', 'ovar_topography', 
'ovar_morphology', 'ovar_behavior', 'ovar_histtype', 'ovar_exitstat', 'ovar_exitage', 'ovar_seer',
'ovar_cancer_first', 'ovar_curative_surg', 'ovar_curative_chemo', 'ovar_primary_trt', 'ovar_num_heslide_imgs',
'ovar_has_deliv_heslide_img', 'plco_id', 'build', 'build_cancers', 'build_incidence_cutoff', 'ovar_exitdays',
'ovar_primary_trt_days', 'ovar_cancer_diagdays', 'biopolink0', 'biopolink1', 'biopolink2', 'biopolink3', 'biopolink4',
'biopolink5', 'ovar_mra_stat0', 'ovar_mra_stat1', 'ovar_mra_stat2', 'ovar_mra_stat3', 'ovar_mra_stat4', 
'ovar_mra_stat5', 'tvu_result0', 'tvu_result1', 'tvu_result2', 'tvu_result3', 'ca125_result0', 'ca125_result1', 
'ca125_result2', 'ca125_result3', 'ca125_result4', 'ca125_result5', 'ca125_level0', 'ca125_level1', 'ca125_level2',
'ca125_level3', 'ca125_level4', 'ca125_level5', 'ca125_src0', 'ca125_src1', 'ca125_src2', 'ca125_src3', 'ca125_src4',
'ca125_src5', 'ca125ii_level0', 'ca125ii_level1', 'ca125ii_level2', 'ca125ii_level3', 'ca125ii_level4', 
'ca125ii_level5', 'orem_fyro', 'ca125_prot', 'ca125_days0', 'ca125_days1', 'ca125_days2', 'ca125_days3', 
'ca125_days4', 'ca125_days5', 'tvu_days0', 'tvu_days1', 'tvu_days2', 'tvu_days3','bq_adminm','bq_returned', 
'bq_age','bq_compdays','d_dthovar','f_dthovar','d_codeath_cat', 'f_codeath_cat','d_cancersite', 
'f_cancersite', 'd_seer_death', 'f_seer_death', 'is_dead_with_cod', 'is_dead', 'mortality_exitage', 'mortality_exitstat',
'build_death_cutoff', 'dth_days', 'mortality_exitdays','entryage_bq', 'entryage_dqx', 'entryage_dhq', 'entryage_sqx', 
'entryage_muq', 'ph_any_dqx', 'ph_any_dhq', 'ph_any_sqx', 'ph_any_muq', 'ph_ovar_dqx', 'ph_ovar_dhq',
'ph_ovar_sqx', 'ph_ovar_muq', 'ovar_eligible_sqx', 'ovar_eligible_dhq', 'ovar_eligible_dqx', 'entrydays_bq',
'entrydays_dqx', 'entrydays_dhq', 'entrydays_sqx', 'entrydays_muq','fstcan_exitstat', 'fstcan_exitage', 'fstcan_exitdays',
'in_TGWAS_population', 'reconsent_outcome', 'reconsent_outcome_days','dual','center','arm','rndyear','ph_ovar_trial','ph_any_trial',
 'educat', 'marital', 'occupat', 'pipe', 'cigar', 'sisters', 'brothers', 'asp', 'ibup', 
'fmenstr', 'menstrs', 'miscar', 'tubal', 'tuballig', 'lmenstr', 'trypreg', 'prega', 'pregc', 'stillb', 'livec', 'fchilda', 
'hystera', 'asppd', 'ibuppd', 'bcontra', 'bcontrt', 'curhorm', 'thorm', 'hyperten_f', 'hearta_f', 'stroke_f', 'emphys_f', 
'bronchit_f', 'diabetes_f', 'polyps_f', 'arthrit_f', 'osteopor_f', 'divertic_f', 'gallblad_f', 'race7', 'hispanic_f', 
'preg_f', 'hyster_f', 'bcontr_f', 'horm_f', 'horm_stat', 'smoked_f', 'smokea_f', 'rsmoker_f', 'ssmokea_f',
 'cigpd_f', 'filtered_f', 'cig_stat', 'cig_stop', 'cig_years', 'pack_years', 'bmi_20', 'bmi_50', 'bmi_curr', 'bmi_curc', 
 'weight20_f', 'weight50_f', 'menstrs_stat_type', 'post_menopausal', 'bmi_20c', 
 'bmi_50c', 'colon_comorbidity', 'liver_comorbidity', 'ph_any_bq', 'ph_ovar_bq', 'ovar_eligible_bq', 'sex', 'agelevel'] 

dataPLCO = dataPLCO.drop(columns=columns_to_drop)
my_list = list(dataPLCO)
print (my_list)

dataNH_subset = dataNHIS[['OVARYCAN_A','HEIGHTTC_A','WEIGHTLBTC_A','MAMEV_A','PAIAPG3M_A','PHQ85_A','DIFF_A']]

# Rename common columns in dataNHIS to match name in dataPLCO
dataNH_subset = dataNH_subset.rename(columns={'WEIGHTLBTC_A': 'weight_f', 'HEIGHTTC_A':'height_f','MAMEV_A':'mammo_history','OVARYCAN_A': 'ovar_cancer'})
#print(dataNH_subset.describe())

# Combine dataPLCO and dataNHIS
merged_data = pd.concat([dataPLCO, dataNH_subset])


merged_data = merged_data.dropna(subset=['ovar_cancer'])


merged_datax=merged_data.drop(columns=['ovar_cancer'])

print(merged_datax.head())
print(merged_datax.describe())
print(merged_datax.info())

# Imputing missing categorical values with mode
imputer = SimpleImputer(missing_values=np.NaN, strategy='most_frequent')
x_merged_df = imputer.fit_transform(merged_datax)

#Output column
ydata_subset = merged_data['ovar_cancer']
print(ydata_subset.describe())
print(ydata_subset.shape)


#count cancer vs no cancer cases 
num_classes = len(np.unique(ydata_subset))
print("Number of classes:", num_classes)
class_counts = Counter(ydata_subset)
print("Class counts:", class_counts)




#splitting dataset
X_train, X_test, y_train, y_test = train_test_split(x_merged_df, ydata_subset, test_size=0.2, random_state=123, stratify=ydata_subset)

'''
#RandomTreeClassifier hyperparameter tuning by GridSearchCV

# Create the parameter grid based on the results of random search 
param_grid = {
    'bootstrap': [True],
    'max_depth': [5,7,10],
    'max_features': [2,3,6,7],
    'min_samples_leaf': [3, 4, 5],
    'min_samples_split': [3,4,5],
    'n_estimators': [500]
}
'''
rf = RandomForestClassifier(class_weight='balanced', random_state=0,bootstrap= True, max_depth= 7, max_features= 6, min_samples_leaf= 3, min_samples_split= 3, n_estimators= 500)

'''
rf = RandomForestClassifier(class_weight='balanced', random_state=0)

# Instantiate the grid search model
grid_search = GridSearchCV(estimator = rf, param_grid = param_grid, 
                         cv = 3, n_jobs = -1, verbose = 2, scoring='balanced_accuracy')

'''


def evaluate(model, test_features):
    y_pred = model.predict(test_features)
    print(y_pred)
    clf_report = pd.DataFrame(classification_report(y_test, y_pred, output_dict=True))
    print("Test Result:\n================================================")        
    print(f"Accuracy Score: {accuracy_score(y_test, y_pred) * 100:.2f}%")
    print("_______________________________________________")
    print(f"CLASSIFICATION REPORT:\n{clf_report}")
    print("_______________________________________________")
    print(f"Confusion Matrix: \n {confusion_matrix(y_test, y_pred)}\n")
    print(f"Balanced Accuracy: \n {balanced_accuracy_score(y_test,y_pred)}\n")

    
    return y_pred

rf.fit(X_train,y_train)




# Saving model to current directory
# Pickle serializes objects so they can be saved to a file, and loaded in a program again later on.
pickle.dump(rf, open('model.pkl','wb'))

user1 = [[1,1,1,1,1,1,1,1,1,1,50,150,1,1,1,1,1,5,30,20,30,2,2,2]]
print(evaluate(rf,user1))



'''
# Fit the grid search to the data
grid_search.fit(X_train,y_train)
# Get the best grid parameters
best_params = grid_search.best_params_
print("Best grid parameters:", best_params)
#Evaluate best estimator on testing data
best_grid = grid_search.best_estimator_
evaluate(best_grid,X_test,y_test)
'''
# Extract single tree
estimator = rf.estimators_[0]
# Export as dot file
export_graphviz(estimator, out_file='tree.dot', 
                feature_names = merged_datax.columns.values,
                class_names=['No Cancer', 'Cancer'],
                rounded = True, proportion = False, 
                precision = 2, filled = True)

# Convert to png using system command (requires Graphviz)

#call(['dot', '-Tpng', 'tree.dot', '-o', 'tree.png', '-Gdpi=600'])

#print("!!!!!!!!!!Is it printing this!!!!!!!!!!")

# Display in jupyter notebook
#from IPython.display import Image
#Image(filename = 'tree.png')
