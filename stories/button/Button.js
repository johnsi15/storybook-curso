import './button.css'

export const createButton = ({ style = 'outlined', size = 'small', label }) => {
  const btn = document.createElement('button')
  btn.type = 'submit'
  btn.role = 'button'
  btn.innerText = label
  btn.className = ['button', `button--${size}`, `button--${style}`].join(' ')
  // btn.addEventListener('click', onClick)

  return btn
}
