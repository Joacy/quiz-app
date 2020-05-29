import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished'

import { HeaderBox, SwitchBox } from './style';

interface Props {
    toogleTheme (): void;
}

const Header: React.FC<Props> = ({ toogleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <HeaderBox>
            Quiz App

            <SwitchBox>
                <Switch
                    onChange={toogleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={30}
                    handleDiameter={15}
                    offColor={shade(0.1, colors.primary)}
                    onColor={colors.secondary}
                />
            </SwitchBox>
        </HeaderBox>
    );
};

export default Header;