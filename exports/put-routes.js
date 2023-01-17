const express = require('express');
const db = require('../database/connection');
const router = express.Router();

router.put('/update/part1', (req, res) => {
    const {
        patient_code, 
        first_name,
        last_name,
        age,
        city_of_residence,
        date_of_diagnosis,
        date_of_surgery,
        histopath_result,
        gleason_score,
        date_of_treatment,
        treatment_type,
        ecog_score,
        ht,
        wt,
        bmi,
        bp,
        hr,
        pain_score,
        local_symptoms,
        systemic_symptoms,
        psa,
        creatinine,
        wbc,
        rbc,
        hemoglobin,
        hematocrit,
        platelet_count,
        lactate_dehydrogenase,
        alkaline_phosphatase,
        sgpt_sgot_bilirubins,
        normal_salivary_gland,
        right_obstruction,
        left_obstruction,
        renal_scintigraphy,
        bone_scan,
        metastasis_location,
        lesion_ga_psma,
        lesion_prostate_a,
        lesion_prostate_a_location,
        lesion_prostate_a_suv,
        lesion_prostate_a_measurement,
        lesion_lymph_a,
        lesion_lymph_a_location,
        lesion_lymph_a_suv,
        lesion_lymph_a_measurement,
        lesion_bone_a,
        lesion_bone_a_location,
        lesion_bone_a_suv,
        lesion_bone_a_measurement,
        lesion_brain_a,
        lesion_brain_a_location,
        lesion_brain_a_suv,
        lesion_brain_a_measurement,
        lesion_lungs_a,
        lesion_lungs_a_location,
        lesion_lungs_a_suv,
        lesion_lungs_a_measurement,
        lesion_liver_a,
        lesion_liver_a_location,
        lesion_liver_a_suv,
        lesion_liver_a_measurement,
        lesion_others_a,
        lesion_others_a_location,
        lesion_others_a_suv,
        lesion_others_a_measurement,
        lesion_fdg_ctr,
        lesion_prostate_b,
        lesion_prostate_b_location,
        lesion_prostate_b_suv,
        lesion_prostate_b_measurement,
        lesion_lymph_b,
        lesion_lymph_b_location,
        lesion_lymph_b_suv,
        lesion_lymph_b_measurement,
        lesion_bone_b,
        lesion_bone_b_location,
        lesion_bone_b_suv,
        lesion_bone_b_measurement,
        lesion_brain_b,
        lesion_brain_b_location,
        lesion_brain_b_suv,
        lesion_brain_b_measurement,
        lesion_lungs_b,
        lesion_lungs_b_location,
        lesion_lungs_b_suv,
        lesion_lungs_b_measurement,
        lesion_liver_b,
        lesion_liver_b_location,
        lesion_liver_b_suv,
        lesion_liver_b_measurement,
        lesion_others_b,
        lesion_others_b_location,
        lesion_others_b_suv,
        lesion_others_b_measurement,
        assessment,
        plan } = req.body;
        db('part1')
        .where({patient_code: patient_code})
        .update({
            first_name: first_name,
            last_name: last_name,
            age: age,
            city_of_residence: city_of_residence,
            date_of_diagnosis: date_of_diagnosis,
            date_of_surgery: date_of_surgery,
            histopath_result: histopath_result,
            gleason_score: gleason_score,
            date_of_treatment: date_of_treatment,
            treatment_type: treatment_type,
            ecog_score: ecog_score,
            ht: ht,
            wt: wt,
            bmi: bmi,
            bp: bp,
            hr: hr,
            pain_score: pain_score,
            local_symptoms: local_symptoms,
            systemic_symptoms: systemic_symptoms,
            psa: psa,
            creatinine: creatinine,
            wbc: wbc,
            rbc: rbc,
            hemoglobin: hemoglobin,
            hematocrit: hematocrit,
            platelet_count: platelet_count,
            lactate_dehydrogenase: lactate_dehydrogenase,
            alkaline_phosphatase: alkaline_phosphatase,
            sgpt_sgot_bilirubins: sgpt_sgot_bilirubins,
            normal_salivary_gland: normal_salivary_gland,
            right_obstruction: right_obstruction,
            left_obstruction: left_obstruction,
            renal_scintigraphy: renal_scintigraphy,
            bone_scan: bone_scan,
            metastasis_location: metastasis_location,
            lesion_ga_psma: lesion_ga_psma,
            lesion_prostate_a: lesion_prostate_a,
            lesion_prostate_a_location: lesion_prostate_a_location,
            lesion_prostate_a_suv: lesion_prostate_a_suv,
            lesion_prostate_a_measurement: lesion_prostate_a_measurement,
            lesion_lymph_a: lesion_lymph_a,
            lesion_lymph_a_location: lesion_lymph_a_location,
            lesion_lymph_a_suv: lesion_lymph_a_suv,
            lesion_lymph_a_measurement: lesion_lymph_a_measurement,
            lesion_bone_a: lesion_bone_a,
            lesion_bone_a_location: lesion_bone_a_location,
            lesion_bone_a_suv: lesion_bone_a_suv,
            lesion_bone_a_measurement: lesion_bone_a_measurement,
            lesion_brain_a: lesion_brain_a,
            lesion_brain_a_location: lesion_brain_a_location,
            lesion_brain_a_suv: lesion_brain_a_suv,
            lesion_brain_a_measurement: lesion_brain_a_measurement,
            lesion_lungs_a: lesion_lungs_a,
            lesion_lungs_a_location: lesion_lungs_a_location,
            lesion_lungs_a_suv: lesion_lungs_a_suv,
            lesion_lungs_a_measurement: lesion_lungs_a_measurement,
            lesion_liver_a: lesion_liver_a,
            lesion_liver_a_location: lesion_liver_a_location,
            lesion_liver_a_suv: lesion_liver_a_suv,
            lesion_liver_a_measurement: lesion_liver_a_measurement,
            lesion_others_a: lesion_others_a,
            lesion_others_a_location: lesion_others_a_location,
            lesion_others_a_suv: lesion_others_a_suv,
            lesion_others_a_measurement: lesion_others_a_measurement,
            lesion_fdg_ct: lesion_fdg_ctr,
            lesion_prostate_b: lesion_prostate_b,
            lesion_prostate_b_location: lesion_prostate_b_location,
            lesion_prostate_b_suv: lesion_prostate_b_suv,
            lesion_prostate_b_measurement: lesion_prostate_b_measurement,
            lesion_lymph_b: lesion_lymph_b,
            lesion_lymph_b_location: lesion_lymph_b_location,
            lesion_lymph_b_suv: lesion_lymph_b_suv,
            lesion_lymph_b_measurement: lesion_lymph_b_measurement,
            lesion_bone_b: lesion_bone_b,
            lesion_bone_b_location: lesion_bone_b_location,
            lesion_bone_b_suv: lesion_bone_b_suv,
            lesion_bone_b_measurement: lesion_bone_b_measurement,
            lesion_brain_b: lesion_brain_b,
            lesion_brain_b_location: lesion_brain_b_location,
            lesion_brain_b_suv: lesion_brain_b_suv,
            lesion_brain_b_measurement: lesion_brain_b_measurement,
            lesion_lungs_b: lesion_lungs_b,
            lesion_lungs_b_location: lesion_lungs_b_location,
            lesion_lungs_b_suv: lesion_lungs_b_suv,
            lesion_lungs_b_measurement: lesion_lungs_b_measurement,
            lesion_liver_b: lesion_liver_b,
            lesion_liver_b_location: lesion_liver_b_location,
            lesion_liver_b_suv: lesion_liver_b_suv,
            lesion_liver_b_measurement: lesion_liver_b_measurement,
            lesion_others_b: lesion_others_b,
            lesion_others_b_location: lesion_others_b_location,
            lesion_others_b_suv: lesion_others_b_suv,
            lesion_others_b_measurement: lesion_others_b_measurement,
            assessment: assessment,
            plan: plan
        })
        .then(() => {
            res.json([{event :'success'}])
           
        })
        .catch((err) => {
            res.json([{event: 'error'}])
        })

})

module.exports = router