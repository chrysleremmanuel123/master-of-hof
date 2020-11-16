import React from 'react';

class HigherOrderComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
                { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age: 58, years: 25 },
                { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }

            ]
        }
    }
    // display all items
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">

                    <span>Id: {item.id}</span>
                    <span>Name : {item.name}</span>
                    <span>User Type: {item.user_type}</span>
                </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    renderUserType = () => {
        const data = this.state.userData;
        var filterdata = data.filter((user) => {
            return (user.user_type == 'Designer')
        }).map((user) => {
            return (
                <React.Fragment key={user.id}>
                    <li className="list-elements">

                        <span>Id: {user.id}</span>
                        <span>Name : {user.name}</span>
                        <span>User Type: {user.user_type}</span>
                    </li>
                </React.Fragment>
            )
        })
        return filterdata;
    }
    renderNameWithJ = () => {
        const data = this.state.userData;
        var filterdata = data.filter((UserName) => {
            return UserName.name.startsWith("J");
        }).map((user) => {
            return (
                <React.Fragment key={user.id}>
                    <li className="list-elements">

                        <span>Id: {user.id}</span>
                        <span>Name : {user.name}</span>
                        <span>User Type: {user.user_type}</span>
                    </li>
                </React.Fragment>
            )
        })
        return filterdata;
    }
    renderAge = () => {
        const data = this.state.userData;
        var filterdata = data.filter((age) => {
            return (age.age > 28 && age.age <= 50);
        }).map((user) => {
            return (
                <React.Fragment key={user.id}>
                    <li className="list-elements">

                        <span>Id: {user.id}</span>
                        <span>Name : {user.name}</span>
                        <span>User Type: {user.user_type}</span>
                    </li>
                </React.Fragment>
            )
        })
        return filterdata;
    }
    renderTotalExperinece = () => {
        const data = this.state.userData;
        var filterdata = data.filter((user) => {
            return (user.user_type == 'Designer')
        }).map((user) => {
            return user.years;
        }).reduce(function (acc, year) {
            var total = acc + year;
            return (
                <React.Fragment>
                    <li className="list-elements">

                        <span>{total}</span>
                    </li>
                </React.Fragment>
            )
        })
        return filterdata;
    }
    render() {
        return (
            // instead of a parent div tag we can also use React.Fragment
            <React.Fragment>
                <h1>Display all items</h1>
                <div className="display-box">
                    <ul>{this.renderItems()} </ul>
                </div>
                <h1>Display based on user type</h1>
                <div className="display-box">
                    <ul>{this.renderUserType()} </ul>
                </div>
                <h1>Filter All Data starting with J</h1>
                <div className="display-box">
                    <ul>{this.renderNameWithJ()} </ul>
                </div>
                <h1>Filter All Data  based on age greater than 28 and age less than or equal to 50</h1>
                <div className="display-box">
                    <ul>{this.renderAge()} </ul>
                </div>
                <h1>Find the total years of the designers</h1>
                <div className="display-box">
                    <ul>{this.renderTotalExperinece()} </ul>
                </div>
            </React.Fragment>
        )
    }
}
export default HigherOrderComponent;