import styled from '@mui/material/styles/styled'
import backgroundImage from '../images/memory-game.jpg';
import UserIcon from '../images/user-icon.png';
import { Container, Box } from '@mui/material';


export const WelcomeContainer = styled(Container)(() => ({
	backgroundImage: `url(${backgroundImage})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	height: '100vh',
	maxWidth: 'none !important',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-end',
	justifyContent: 'center',
}))

export const UserIconImage = styled(Container)(() => ({
	backgroundImage: `url(${UserIcon})`,
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	height: '60px',
	width: '60px'
}))

export const CardUserName = styled(Box)(() => ({
	height: '400px',
	width: '380px',
	borderRadius: 8,
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignContent: 'center',
	alignItems: 'center',
	backgroundColor: 'rgba(255, 255, 255, 0.7)',
	marginRight: '50px'
}))