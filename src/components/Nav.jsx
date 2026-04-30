import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX, FiSun, FiMoon, } from 'react-icons/fi';
  import { FaWhatsapp } from "react-icons/fa";
import '../styles/Nav.css'

const links = [
	{ to: '/', label: 'Home',  },
	{ to: '/about', label: 'About',  },
	{ to: '/projects', label: 'Projects', },
	{ to: '/skills', label: 'Skills',  },
    { to: '/pricing', label: 'Pricing',  },
	{ to: '/contact', label: 'Contact',  }
]

const Nav = () => {
	const [open, setOpen] = useState(false)
	

	return (
		<header className="site-header">
			  <div className="cta-btn">
				   <a href="https://wa.me/qr/EXDPSY577V5AO1" className="social-cta" aria-label="whatapp"><FaWhatsapp /></a>
				   </div>
			<div className="container header-inner">
				<div className="brand">
					<img src="/src/assets/logoImage.png" alt="logo" className="brand-logo" />
					<span className="brand-title">CodeCanvas</span>
				</div>

				<nav className={`main-nav ${open ? 'open' : ''}`} aria-label="Primary">
					<ul>
						{links.map(l => (
							<li key={l.to} onClick={() => setOpen(false)}>
								<NavLink to={l.to} end className={({ isActive }) => isActive ? 'active nav-link' : 'nav-link'}>
									<span className="nav-icon" aria-hidden>{l.icon}</span>
									<span className="nav-text">{l.label}</span>
								</NavLink>
							</li>
						))}
					</ul>
				</nav>

				<div className="header-actions">
					<div id="cta-btn">Let's Talk</div>
				

					<button className="menu-toggle" onClick={() => setOpen(s => !s)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open

					}>
						{open ? <FiX /> : <FiMenu />}
					</button>
				</div>
			</div>
		</header>
	)
}

export default Nav
