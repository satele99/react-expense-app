import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { showSettingModal, showSignInModal, openSideBar, setModal } from "../features/signInSlice";
import { useState } from "react";
import { useSelector } from 'react-redux';
import '/Users/amirhali/repos/react-expenses/src/css-folder/Sidebar.css'

export default function Sidebar(props) {

    // const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState(null)
    const dispatch = useDispatch();
    const sideOpen = useSelector(setModal);
    const toggle = () => {
        dispatch(openSideBar())
        // setIsOpen(!isOpen);
    }
    const openSettingModal = () => {
        dispatch(showSettingModal())
    }
    const openSignInModal = () => {
        dispatch(showSignInModal());
    }

    const navItem = [
        {
        path: '/',
        icon: <i class="bi bi-house-door"></i>,
        linkText: 'Home'
        },
    {
        path: '/category',
        icon: <i class="bi bi-wallet"></i>,
        linkText: 'Budget'
    },
    {
        path: '/expenses',
        icon: <i class="bi bi-pie-chart"></i>,
        linkText: 'Expenses'
    },
    {
        path: '/reports',
        icon: <i class="bi bi-graph-up-arrow"></i>,
        linkText: 'Analytics'
    },
    ]

    return (
        <div className="side-container">
            <div style={{width: sideOpen.sideBarOpen ? "300px" : "50px"}} className="sidebar">
                <div className="top_section" style={{justifyContent: sideOpen.sideBarOpen ? "center": "none"}}>
                    <h1 className="logo" style={{display: sideOpen.sideBarOpen ? "block" : "none"}}>Budget App</h1>
                    <div className="bar" style={{marginLeft: sideOpen.sideBarOpen ? "90px" : "0px", display: sideOpen.sideBarOpen ? "flex":"block"}}>
                    <i class="bi bi-list" onClick={toggle}></i>
                    </div>
                </div>
                {
                    navItem.map((item, index)=>(
                        <Link to={item.path} key={index} onClick={()=>setActive(item)} className={`link ${active === item && 'active'}`}>
                            <div className="icon">{item.icon}</div>
                            <div className="link_text" style={{display: sideOpen.sideBarOpen ? "block" : "none"}}>{item.linkText}</div>
                        </Link>
                    ))
                }
                <div className="footer" style={{flexDirection: sideOpen.sideBarOpen ? "row" : "column", justifyContent: sideOpen.sideBarOpen ? "center" : "none",marginTop: sideOpen.sideBarOpen ? "270px" : "170px", fontSize: sideOpen.sideBarOpen ? "30px" : "20px"}}>
                    <i class="bi bi-person-circle profile" onClick={openSignInModal}></i>
                    <i class="bi bi-gear-fill profile" onClick={openSettingModal}></i>
                </div>
            </div>
        </div>
    )
}