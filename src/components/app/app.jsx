import React from 'react';
import './app.scss';
import Logo from './images/LOGO2.gif';
import user from './images/nopic.png'

function App() {
  return (
    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <div class="app-header header-shadow">
            <div class="app-header__logo">
                <h3 class="font-weight-bold text-black">Dashboard</h3>
                {/* <div class="logo-src"></div> */}
                <div class="header__pane ml-auto">
                    <div>
                        <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="app-header__mobile-menu">
                <div>
                    <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
            <div class="app-header__menu">
                <span>
                    <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                        <span class="btn-icon-wrapper">
                            <i class="fa fa-ellipsis-v fa-w-6"></i>
                        </span>
                    </button>
                </span>
            </div>    <div class="app-header__content">
                <div class="app-header-left">
                <img src={Logo} style={{height:"60px",width:"100px"}}/>
 </div>
                <div class="app-header-right">
                    <div class="header-btn-lg pr-0">
                        <div class="widget-content p-0">
                            <div class="widget-content-wrapper">
                            <div class="search-wrapper">
                        <div class="input-holder">
                            <input type="text" class="search-input" placeholder="Type to search"/>
                            <button class="search-icon"><span></span></button>
                        </div>
                        <button class="close"></button>
                    </div>
                                <div class="widget-content-left">
                                    
                                    <div class="btn-group">
                                        <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="p-0 btn">
                                            <img width="42" class="rounded-circle" src={user} alt=""/>
                                            <i class="fa fa-angle-down ml-2 opacity-8"></i>
                                        </a>
                                        <div tabindex="-1" role="menu" aria-hidden="true" class="dropdown-menu dropdown-menu-right">
                                            <button type="button" tabindex="0" class="dropdown-item">User Account</button>
                                            <button type="button" tabindex="0" class="dropdown-item">Settings</button>
                                            <h6 tabindex="-1" class="dropdown-header">Header</h6>
                                            <button type="button" tabindex="0" class="dropdown-item">Actions</button>
                                            <div tabindex="-1" class="dropdown-divider"></div>
                                            <button type="button" tabindex="0" class="dropdown-item">Dividers</button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="widget-content-left  ml-3 header-user-info">
                                    <div class="widget-heading">
                                        UserName
                                    </div>
                                    <div class="widget-subheading">
                                        Role
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>        </div>
            </div>
        </div>       
        
        <div class="app-main">
                <div class="app-sidebar sidebar-shadow">
                    <div class="app-header__logo">
                        <div class="logo-src"></div>
                        <div class="header__pane ml-auto">
                            <div>
                                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                    <span class="hamburger-box">
                                        <span class="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="app-header__mobile-menu">
                        <div>
                            <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                                <span class="hamburger-box">
                                    <span class="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="app-header__menu">
                        <span>
                            <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                <span class="btn-icon-wrapper">
                                    <i class="fa fa-ellipsis-v fa-w-6"></i>
                                </span>
                            </button>
                        </span>
                    </div>    <div class="scrollbar-sidebar">
                        <div class="app-sidebar__inner">
                            <ul class="vertical-nav-menu">
                                <li class="app-sidebar__heading">View Investory</li>
                                <li>
                                    <a href="#">
                                        {/* <i class="metismenu-icon pe-7s-diamond"></i> */}
                                        Drugs 
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        {/* <i class="metismenu-icon pe-7s-diamond"></i> */}
                                        Equiments
                                    </a>
                                </li>
                                <li class="app-sidebar__heading">Investory Tracking</li>
                                <li>
                                    <a href="#">
                                        {/* <i class="metismenu-icon pe-7s-diamond"></i> */}
                                        Regions
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        {/* <i class="metismenu-icon pe-7s-diamond"></i> */}
                                        Health Centers & Referrals
                                    </a>
                                </li>
                                <li class="app-sidebar__heading">Facilities</li>
                                <li>
                                    <a href="#">
                                        {/* <i class="metismenu-icon pe-7s-diamond"></i> */}
                                        View Facilities
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        {/* <i class="metismenu-icon pe-7s-diamond"></i> */}
                                        Edit Facility Info
                                    </a>
                                </li>
                                <li class="app-sidebar__heading">User Registration</li>
                                <li>
                                    <a href="#">
                                        {/* <i class="metismenu-icon pe-7s-diamond"></i> */}
                                        View Users
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        {/* <i class="metismenu-icon pe-7s-diamond"></i> */}
                                        Edit User Info
                                    </a>
                                </li>
                         
                                <li class="app-sidebar__heading">System Roles & Rights</li>
                                <li>
                                    <a href="#">
                                        {/* <i class="metismenu-icon pe-7s-diamond"></i> */}
                                        View Roles
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        {/* <i class="metismenu-icon pe-7s-diamond"></i> */}
                                        Edie Roles & Rights
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>    
                <div class="app-main__outer">
                    
        </div>
    </div>
    </div>
  );
}

export default App;
