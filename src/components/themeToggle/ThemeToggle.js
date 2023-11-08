import './ThemeToggle.css'

export const ThemeToggle = ({ toggleTheme, theme }) => {

    return (
        <div className='tog'>
            <p className='toggle__text'>{theme === 'light' ? 'Light mode' : 'Dark mode'}</p>
            <input type="checkbox" defaultChecked={theme === 'light' ? 'checked' : ''} id="theme__toggle" className='theme__toggle' onClick={toggleTheme} />
            <label for="theme__toggle"></label>
        </div>
    )
}
