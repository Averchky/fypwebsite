import React from 'react';
import '../../App.css';

import awarePic from '../../assets/awareness.png';
import Fade from '@material-ui/core/Fade';

export default function Awareness() {
    return (
        <div class="awareness">
            <Fade in={true}>
            <div class="awareness-wrapper">
                <h1>Awareness on Schizophrenia</h1>
                <img src={ awarePic }/>
                <p>
                    <a href="https://en.wikipedia.org/wiki/Schizophrenia" target="_blank">Schizophrenia</a> is a psychiatric disorder characterized by continuous or relapsing episodes of psychosis. Major symptoms include hallucinations (typically hearing voices), delusions, and disorganized thinking. Other symptoms include social withdrawal, decreased emotional expression, and apathy. 
                </p>
                <p>
                Symptoms typically come on gradually, begin in young adulthood, and in many cases never resolve. There is no objective diagnostic test; diagnosis is based on observed behavior, a history that includes the person's reported experiences, and reports of others familiar with the person. To be diagnosed with schizophrenia, symptoms and functional impairment need to be present for six months (DSM-5) or one month (ICD-11). Many people with schizophrenia have other mental disorders that often includes an anxiety disorder such as panic disorder, an obsessive–compulsive disorder, or a substance use disorder.
                </p>
                <p>
                To know more about the National Schizophrenia Awareness Day, you can visit the following <a href="https://www.rethink.org/get-involved/awareness-days-and-events/schizophrenia-awareness-day/" target="_blank">link</a> for more information.
                </p>
            </div>
            </Fade>
        </div>
    );
}
