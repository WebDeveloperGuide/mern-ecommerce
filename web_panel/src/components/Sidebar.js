import React from 'react';

const Sidebar = () => {
	return(
			<>
				<div className="sidebar-overlay">
			        <aside className="sidebar">
			          <button className="sidebar-close">
			            <i className="fas fa-times" />
			          </button>
			          <ul className="sidebar-links">
			            <li>
			              <a href="index.html" className="sidebar-link">
			                <i className="fas fa-home fa-fw" />
			                home
			              </a>
			            </li>
			            <li>
			              <a href="products.html" className="sidebar-link">
			                <i className="fas fa-couch fa-fw" />
			                products
			              </a>
			            </li>
			            <li>
			              <a href="about.html" className="sidebar-link">
			                <i className="fas fa-book fa-fw" />
			                about
			              </a>
			            </li>
			          </ul>
			        </aside>
			      </div>
			      <div className="sidebar-overlay">
			        <aside className="sidebar">
			          <button className="sidebar-close">
			            <i className="fas fa-times" />
			          </button>
			          <ul className="sidebar-links">
			            <li>
			              <a href="index.html" className="sidebar-link">
			                <i className="fas fa-home fa-fw" />
			                home
			              </a>
			            </li>
			            <li>
			              <a href="products.html" className="sidebar-link">
			                <i className="fas fa-couch fa-fw" />
			                products
			              </a>
			            </li>
			            <li>
			              <a href="about.html" className="sidebar-link">
			                <i className="fas fa-book fa-fw" />
			                about
			              </a>
			            </li>
			          </ul>
			        </aside>
			      </div>
			</>
		)
}

export default Sidebar;