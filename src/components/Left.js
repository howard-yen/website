import React from 'react';
import BubbleRow from './SocialMediaBubbles';
import faceshot from '../images/faceshot_circle_black.png';

import Nav from 'react-bootstrap/Nav';
import './Left.css';

class Menu extends React.Component{
    getButtons = (pages, currentPage) => {
        const buttons = [];

        for(let i = 0; i < pages.length; i++){
            // let o = {opacity: i===currentPage ? '100%' : '50%'};

            buttons.push(
                <Nav.Link className="MenuButton" key={i} eventKey={i}>
                    {pages[i]}
                </Nav.Link>
            );
        }

        return [...buttons];
    }
    getA = (pages, currentPages) =>{
        const buttons =[];
        for(let i = 0; i < pages.length; i++){
            let name = "#" + pages[i];
            buttons.push(
                <a className="MenuButton" href={name} key={pages[i]}>
                    {pages[i]}
                </a>
            );
        }

        return [...buttons];
    }

    render(){
        // const buttons = this.getButtons(this.props.pages, this.props.currentPage);
        const buttons = this.getA(this.props.pages, this.props.currentPage);

        return(
            <Nav
                defaultActiveKey={this.props.currentPage}
                onSelect={this.props.handlePageChange}
                className="menu flex-column"
            >
                {buttons}
            </Nav>
        );
    };
}

export default class Left extends React.Component{
    render(){
        return(
            <div className="Split Left">
                <header className="Left-header">
                    <img src={faceshot} alt={'Howard Yen'} width='250px' height='250px'/>
                    <h1 style={{'margin-bottom': '0'}}> Howard Yen</h1>
                    <p style={{'width': '50%', 'text-align':'center'}}>A passionate coder interested in creating various projects!</p>
                </header>
                <Menu
                    handlePageChange={this.props.handlePageChange}
                    pages={this.props.pages}
                    currentPage={this.props.currentPage}
                />
                <footer>
                    <BubbleRow />
                </footer>
            </div>

        );
    }
}
