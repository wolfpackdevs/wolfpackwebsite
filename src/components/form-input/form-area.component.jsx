import React from 'react';

import './form-area.styles.scss';
const FormArea=({handleChange, label, ...otherProps})=>(
    <div className="group">
        
        <textarea className='form-area' onChange={handleChange} {...otherProps} />
        {
            label ?
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>
            :null
        }

    </div>

)

export default FormArea;