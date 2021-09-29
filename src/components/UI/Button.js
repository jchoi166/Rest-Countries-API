import { useContext } from 'react'

import classes from './Button.module.css'
import ThemeContext from '../../context/theme-context'

const Button = (props) => {

    const themeCtx = useContext(ThemeContext)

    const buttonClass = `${classes.button} ${props.className} ${
        themeCtx.currentTheme === "dark"
          ? " darkElement darkBoxShadow"
          : " lightElement lightBoxShadow"
      }`;

    // const buttonClass = `${classes.button} ${props.className} element`
   return <button className={buttonClass}>{props.children}</button>
}


export default Button