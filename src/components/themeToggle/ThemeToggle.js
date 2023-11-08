import { toBeChecked } from '@testing-library/jest-dom/matchers'
import './ThemeToggle.css'

export const ThemeToggle = ({ toggleTheme, theme }) => {

    return (
        <div className='tog'>
            <p className='toggle__text'>{theme === 'light' ? 'Light mode' : 'Dark mode'}</p>
            <input type="checkbox" id="theme__toggle" className='theme__toggle' onClick={toggleTheme} />
            <label for="theme__toggle"></label>
        </div>
    )
}
