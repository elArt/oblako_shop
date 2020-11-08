import React from "react";
import { connect } from "react-redux";
import Shisha from "./Shisha";
import { getShisha, initialShisha } from "./../../redux/shisha-reduser";
import { compose } from "redux";

class ShishaContainer extends React.Component {
  componentDidMount() {
    this.props.initialShisha();
  }
  getDataFromBase = () => {
    this.props.getShisha();
  }

  //   changePage = (page) => {
  //     this.props.getShisha(page, this.props.pageSize);
  //   };
  render() {
    return (
      <div>
        <button onClick = {this.getDataFromBase}>Click</button>
        <Shisha
          {...this.props}
          //   changePage = {this.changePage}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shishaPage: state.shishaPage,
    // pageSize: state.usersPage.pageSize,
    // totalUsersCount: state.usersPage.totalUsersCount,
    // currentPage: state.usersPage.currentPage,
    // isFetchingValue: state.usersPage.isFetchingValue,
    // followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    //   follow, unfollow, setCurrentPage, toggleFollowingProgress,
    getShisha, initialShisha
  })
)(ShishaContainer);
