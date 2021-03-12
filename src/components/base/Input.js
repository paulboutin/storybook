import React from 'react'
import classNames from 'classnames'

const Input = ({
  id,
  variant,
  value,
  error,
  help,
  label,
  noHelperSpacing,
  ...attrs
}) => (
  <div
    className={classNames('input-block', `input-block-${variant}`, {
      'input-active': !!value,
      'input-error': error,
      'input-disabled': attrs.disabled,
      'input-placeholder': !!attrs.placeholder,
      'no-helper-spacing': noHelperSpacing
    })}
  >
    {label && (
      <label className='input-label' htmlFor={id}>
        {label}
        {!attrs.required && <span className='input-optional'>(Optional)</span>}
      </label>
    )}

    {attrs.type === 'password' && (
      <i className='icon icon-show input-password-control' />
    )}

    <input id={id} className='input-control' defaultValue={value} {...attrs} />

    {variant === 'underline' && (
      <div className='input-underline'>
        <div className='input-underline-active' />
      </div>
    )}

    <div className='input-text-wrapper'>
      {(error || help) && (
        <p className='input-help'>
          {error ? (
            <>
              <i className='icon icon-error' />
              {error}
            </>
          ) : (
            help
          )}
        </p>
      )}
    </div>
  </div>
)

export default Input
