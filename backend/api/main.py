import uvicorn
import pickle
from pydantic import BaseModel
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


origins = [

"http://localhost.tiangolo.com",

"https://localhost.tiangolo.com",

"http://localhost",

"http://localhost:8080",

"http://localhost:3000",

]

app.add_middleware(

CORSMiddleware,

allow_origins=origins,

allow_credentials=True,

allow_methods=["*"],

allow_headers=["*"],

)


model = pickle.load(open('model.pkl', 'rb'))

class Candidate(BaseModel):

    fh_cancer: float

    ovarsumm_fh_cnt : float

    breast_fh: float
    ovarsumm_fh: float

    breast_fh_cnt: float

    breast_fh_age: float

    ovarsumm_fh_age: float

    benign_ovcyst: float

    endometriosis: float

    uterine_fib: float

    mammo_history: float

    papsmear_history: float

    pelvic_history: float

    usound_history: float

    ca125_history: float

    bbd: float

    ovariesr_f: float

    age: float

    weight_f: float

    height_f: float

    ovary_trial_flag: float

    PAIAPG3M_A: float

    PHQ85_A: float

    DIFF_A: float


# Setting up the home route

@app.get("/")

def read_root():
    return {"data": "Welcome to online employee hireability prediction model"}

@app.post("/prediction/")



async def get_predict(data: Candidate):
    sample = [[
        data.fh_cancer,

    data.ovarsumm_fh_cnt,

    data.breast_fh,

    data.ovarsumm_fh,

    data.breast_fh_cnt,

    data.breast_fh_age,

    data.ovarsumm_fh_age,

    data.benign_ovcyst,

    data.endometriosis,

    data.uterine_fib,

    data.mammo_history,

    data.papsmear_history,

    data.pelvic_history,

    data.usound_history,

    data.ca125_history,

    data.bbd,

    data.ovariesr_f,

    data.age,

    data.weight_f,

    data.height_f,

    data.ovary_trial_flag,

    data.PAIAPG3M_A,

    data.PHQ85_A,

    data.DIFF_A

   
    ]]

    

    risk = model.predict(sample).tolist()[0]

    return{
        "data":{
        
        'prediction': risk,

        'interpretation': 'User can be at risk for ovarian cancer.' if risk == 1 else
        'User is not at risk for ovarian cancer'
        }
    }

if __name__ == '__main__':

    uvicorn.run(app, port=8080, host='0.0.0.0')