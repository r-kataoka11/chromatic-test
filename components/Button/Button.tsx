import { FC, ReactNode } from 'react'
import styles from './button.module.css'

interface ButtonProps {
  children?: ReactNode
}

export const Button: FC<ButtonProps> = ({ children }) => (
  <button className={styles.button}>{children}</button>
)
