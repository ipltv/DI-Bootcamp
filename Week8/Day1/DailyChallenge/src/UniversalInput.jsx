import React from 'react'

export default function UniversalInput(
    { id,
        label,
        type = 'text',
        name,
        value,
        onChange,
        placeholder,
        checked }
) {
    return (
        <div className="form-group">
            {type === 'checkbox' || type === 'radio' ? (
                <label className="inline-option">
                    <input
                        id={id}
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        checked={checked}
                    />
                    {label}
                </label>
            ) : (
                <>
                    {label && id && <label htmlFor={id}>{label}</label>}
                    <input
                        id={id}
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                    />
                </>
            )}
        </div>
    )
}