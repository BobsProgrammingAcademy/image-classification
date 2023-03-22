import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';
import { TextField, createTheme } from '@mui/material';
import { Input, ariaLabel } from '@mui/material';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import axios from 'axios';

const ClassifierHeader = () => {
const theme = createTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const [question1, setQuestion1] = useState('');
  const [question2, setQuestion2] = useState('');
  const [question3, setQuestion3] = useState('');
  const [question4, setQuestion4] = useState('');
  const [question5, setQuestion5] = useState('');
  const [question6, setQuestion6] = useState('');
  const [question7, setQuestion7] = useState('');
  const [question8, setQuestion8] = useState('');
  const [question9, setQuestion9] = useState('');
  const [question10, setQuestion10] = useState('');
  const [question11, setQuestion11] = useState('');
  const [question12, setQuestion12] = useState('');
  const [question13, setQuestion13] = useState('');
  const [question14, setQuestion14] = useState('');
  const [question15, setQuestion15] = useState('');
  const [question16, setQuestion16] = useState('');
  const [question17, setQuestion17] = useState('');
  const [question18, setQuestion18] = useState('');
  const [question19, setQuestion19] = useState('');
  const [question20, setQuestion20] = useState('');
  const [question21, setQuestion21] = useState('');
  const [question22, setQuestion22] = useState('');
  const [question23, setQuestion23] = useState('');
  const [question24, setQuestion24] = useState('');

  

  const handleSubmit = async (e) => {

}

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const formData = {
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7,
    question8,
    question9,
    question10,
    question11,
    question12,
    question13,
    question14,
    question15,
    question16,
    question17,
    question18,
    question19,
    question20,
    question21,
    question22,
    question23,
    question24
  };
    
    return(
    <form onSubmit={handleSubmit}>
            <Typography
                color={theme.palette.text.primary}
                variant='h2'
            >
                Survey
            </Typography>
            <Box paddingTop={2}>
                <Typography
                    color={theme.palette.text.secondary}
                    variant='h5'
                >
                    Select answers to the question prompts as best as possible, these answers will determine your results!
                </Typography>
            </Box>

            <Box padding={2}>
            <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                   1. Has any first-degree relative had cancer?
                    <Typography></Typography> 
                    Basal cell skin cancers are not included. 
                    First-degree relatives include parents, full-siblings, and children.
                     Half-siblings are not included.
                     
                     <Typography></Typography>
                     0 = No
                     <Typography></Typography>
                     1 = Yes

                </Typography>
            <TextField id="fh_cancer" label="0/1" value={question1}
            onChange={(e) => setQuestion1(e.target.value)} variant="standard" />
    
      
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                   2. Enter the number of first-degree relatives with ovarian, fallopian tube, or peritoneal 
                    cancer. Ovarian summary cancers include ovarian, fallopian tube and peritoneal cancer.
                    <Typography></Typography>
                </Typography>
                <TextField id="ovarsumm_fh_cnt" label="#"
                value={question2}
                onChange={(e) => setQuestion2(e.target.value)} variant="standard" />
    </Box>
    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                   3. Breast cancer family history in first-degree relatives. Includes parents, full-siblings, and children.
                    <Typography></Typography>
                    Indicate EITHER:
                    <Typography></Typography> 0 = No
                    <Typography></Typography>1 = Yes 
                    <Typography></Typography>2 = Male Relative Only 
                    <Typography></Typography>9 = Possibly - Relative or Cancer Type Not Clear
                    <Typography></Typography>
                </Typography>
                <TextField id="breast_fh" 
                label="0/1/2/9"
                value={question3}
            onChange={(e) => setQuestion3(e.target.value)} variant="standard" />
    </Box>


    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    4. Indicate ovarian, fallopian tube, or peritoneal cancers family history in first-degree relatives.
                     Includes parents, full-siblings, and children. Ovarian summary cancers include ovarian, fallopian tube and 
                     peritoneal cancers. 
                     <Typography></Typography>
                     Indicate EITHER: 
                     <Typography></Typography>
                     
                     0 = No
                     <Typography></Typography>
                     1 = Yes, Immediate Family Member                     
                     <Typography></Typography>
                     9 = Possibly - Relative or Cancer Type Not Clear
                     <Typography></Typography>
                </Typography>
                <TextField id="ovarsumm_fh"
                 label="0/1/9"
                 value={question4}
            onChange={(e) => setQuestion4(e.target.value)} variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    5. Indicate how many first-degree relatives have breast cancer.
                    <Typography></Typography>
                </Typography>
                <TextField id="breast_fh_cnt" label="#"
                value={question5}
                onChange={(e) => setQuestion5(e.target.value)} variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    6. Indicate the diagnosis age of the youngest first-degree relative diagnosed with breast cancer.
                    <Typography></Typography>
                    If not applicable, enter .N
                    <Typography></Typography>
                </Typography>
                <TextField id="breast_fh_age" label="# OR .N" 
                value={question6}
                onChange={(e) => setQuestion6(e.target.value)}variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    7. Indicate the diagnosis age of the youngest first-degree relative diagnosed with ovarian, fallopian tube,
                     or peritoneal cancer. Ovarian summary cancers include ovarian, fallopian tube and peritoneal cancers.
                    
                     <Typography></Typography>
                     If not applicable, enter .N
                     <Typography></Typography>
                </Typography>
                <TextField id="ovarsumm_fh_age" label="# OR .N"
                value={question7}
                onChange={(e) => setQuestion7(e.target.value)} variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    8. Have you ever been told by a doctor that you had a benign ovarian tumor/cyst?
                    <Typography></Typography>
                    0 = No
                    <Typography></Typography>
                    1 = Yes
                    <Typography></Typography>


                </Typography>
                <TextField id="benign_ovcyst" label = " 0/1"
                value={question8}
                onChange={(e) => setQuestion8(e.target.value)} variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                9. Have you ever been told by a doctor that you had endometriosis?
                <Typography></Typography>
                0 = No
                <Typography></Typography>
                1 = Yes
                    <Typography></Typography>
                </Typography>
                <TextField id="endometriosis" label="0/1"
                value={question9}
                onChange={(e) => setQuestion9(e.target.value)} variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    10. Have you ever been told by a doctor that you had uterine fibroid tumors?
                    <Typography></Typography>
                0 = No
                <Typography></Typography>
                1 = Yes
                    <Typography></Typography>
                    <Typography></Typography>
                </Typography>
                <TextField id="uterine_fib" label = "0/1"
                value={question10}
                onChange={(e) => setQuestion10(e.target.value)} variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    11.  During the past three years, have you had a mammogram?
                     <Typography></Typography>
                     0 = No
                <Typography></Typography>
                1 = Yes, once
                    <Typography></Typography>
                    2 = Yes, more than once
                    <Typography></Typography>
                    3 = Don't Know
                    <Typography></Typography>

                </Typography>
                <TextField id="mammo_history" label="0/1/2/3"
                value={question11}
                onChange={(e) => setQuestion11(e.target.value)} variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                   12. During the past three years, have you had a pap smear?
                    <Typography></Typography>
                    0 = No
                <Typography></Typography>
                1 = Yes, once
                    <Typography></Typography>
                    2 = Yes, more than once
                    <Typography></Typography>
                    3 = Don't Know
                    <Typography></Typography>

                </Typography>
                <TextField id="papsmear_history" label="0/1/2/3"
                value={question12}
                onChange={(e) => setQuestion12(e.target.value)} variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                     13. During the past three years, have you had a pelvic examination?
                     <Typography></Typography>
                     0 = No
                <Typography></Typography>
                1 = Yes, once
                    <Typography></Typography>
                    2 = Yes, more than once
                    <Typography></Typography>
                    3 = Don't Know
                    <Typography></Typography>
                </Typography>
                <TextField id="pelvic_history" label="0/1/2/3"
                value={question13}
                onChange={(e) => setQuestion13(e.target.value)} variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    14. During the past three years, have you had an ultrasound or scan of your ovaries?
                    <Typography></Typography>
                    0 = No
                <Typography></Typography>
                1 = Yes, once
                    <Typography></Typography>
                    2 = Yes, more than once
                    <Typography></Typography>
                    3 = Don't Know
                    <Typography></Typography>

                </Typography>
                <TextField id="usound_history" label="0/1/2/3"
                value={question14}
                onChange={(e) => setQuestion14(e.target.value)} variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    15. During the past three years, have you had a blood test for ovarian cancer, for example CA-125?
                    <Typography></Typography>
                    0 = No
                <Typography></Typography>
                1 = Yes, once
                    <Typography></Typography>
                    2 = Yes, more than once
                    <Typography></Typography>
                    3 = Don't Know
                    <Typography></Typography>

                </Typography>
                <TextField id="ca125_history" label="0/1/2/3"
                value={question15}
                onChange={(e) => setQuestion15(e.target.value)} variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                   16. Have you ever been told by a doctor that you had benign or fibrocystic breast disease?
                    <Typography></Typography>
                    0 = No
                    <Typography></Typography>
                    1 = Yes
                    <Typography></Typography>


                </Typography>
                <TextField id="bbd" label="0/1"
                value={question16}
                onChange={(e) => setQuestion16(e.target.value)} variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    17. Have you ever had one or both of your ovaries removed?
                    <Typography>
                    Indicate EITHER:
                    <Typography></Typography>
                   0 =  Ovaries Not Removed
                    <Typography></Typography>
                   1 = One Ovary - Partial
                    <Typography></Typography>
                   2 = One Ovary - Total
                    <Typography></Typography>
                   3 = Both Ovaries - Partial
                    <Typography></Typography>
                   4 = Both Ovaries - Total
                    <Typography></Typography>
                   5 = Don't Know
                    <Typography></Typography>
                   8 = Ambiguous
                   <Typography></Typography>
                    </Typography>
                </Typography>
                <TextField id="ovariesr_f" label="0/1/2/3/4/5/8" 
                value={question17}
                onChange={(e) => setQuestion17(e.target.value)}variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    18. Enter your age.
                    <Typography></Typography>
                </Typography>
                <TextField id="age" label="#"
                value={question18}
                onChange={(e) => setQuestion18(e.target.value)} variant="standard" />
    </Box>
        
    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    19. What is your weight in pounds?
                    <Typography></Typography>
                </Typography>
                <TextField id="weight_f" label="#"
                value={question19}
                onChange={(e) => setQuestion19(e.target.value)} variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    20. What is your height in inches?
                    <Typography></Typography>
                </Typography>
                <TextField id="height_f" label="# inches" 
                value={question20}
                onChange={(e) => setQuestion20(e.target.value)}variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    21. Did you have ovaries at this height and weight?
                    <Typography></Typography>
                    0 = No
                    <Typography></Typography>
                    1 = Yes
                    <Typography></Typography>
                </Typography>
                <TextField id="ovary_trial_flag" label="0/1"
                value={question21}
                onChange={(e) => setQuestion21(e.target.value)} variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    22. Over the past three months, how much have you beenbothered by abdominal, pelvic, or genital pain?
                    <Typography>
                    Indicate either:
                    <Typography></Typography>
                    1 - Not at all
                    <Typography></Typography>
                    2 - A little
                    <Typography></Typography>
                    3 - A lot
                    <Typography></Typography>
                    4 - Somewhere in between a little and a lot
                    <Typography></Typography>
                    7 - Refuse to answer
                    <Typography></Typography>
                    8 - Not Ascertained
                    <Typography></Typography>
                    9 - Don't Know
                    <Typography></Typography>
                    </Typography>
                </Typography>
                <TextField id="PAIAPG3M_A" label="1/2/3/4/5/6/7/8/9"
                value={question22}
                onChange={(e) => setQuestion22(e.target.value)} variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                    23. Over the last two weeks, how often have you been bothered by poor appetite or overeating?
                    <Typography>
                    Indicate either:
                    <Typography></Typography>
                    1 - Not at all
                    <Typography></Typography>
                    2 - Several days
                    <Typography></Typography>
                    3 - More than half the days
                    <Typography></Typography>
                    4 - Nearly every day
                    <Typography></Typography>
                    7 - Refused
                    <Typography></Typography>
                    8 - Not Ascertained
                    <Typography></Typography>
                    9 - Don't Know
                    <Typography></Typography>
                    </Typography>
                </Typography>
                <TextField id="PHQ85_A" label="1/2/3/4/5/6/7/8/9"
                value={question23}
                onChange={(e) => setQuestion23(e.target.value)} variant="standard" />
    </Box>

    <Box padding={2}>
    <Typography
                    color={theme.palette.text.secondary}
                    variant='h8'
                >
                   24. Do you have difficulty walking or climbing steps? Would you say no difficulty,
                    some difficulty, a lot of difficulty, or you cannot do this at all?
                    <Typography>
                    Indicate either:
                    <Typography></Typography>
                    1 - No difficulty
                    <Typography></Typography>
                    2 - Some difficulty
                    <Typography></Typography>
                    3 - A lot of difficulty
                    <Typography></Typography>
                    4 - Cannot do at all
                    <Typography></Typography>
                    7 - Refused
                    <Typography></Typography>
                    8 - Not Ascertained
                    <Typography></Typography>
                    9 - Don't Know
                    <Typography></Typography>
                    </Typography>
                </Typography>
                <TextField id="DIFF_A" label="1/2/3/4/5/6/7/8/9"
                value={question24}
                onChange={(e) => setQuestion24(e.target.value)} variant="standard" />
    </Box>

    <Box
  m={1}
 //margin
  display="flex"
  justifyContent="flex-end"
  alignItems="flex-end"
>
<Button variant="contained" type="submit"> Submit Survey </Button>
</Box>


        </form>
    );
};

export default ClassifierHeader;