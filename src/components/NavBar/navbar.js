import SettingsButton from './settingsButton';

const NavBar = ({ }) => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <h2 className="text-center">Strudel Demo</h2>

                <SettingsButton />

            </div>
        </nav>
    
    )
}

export default NavBar