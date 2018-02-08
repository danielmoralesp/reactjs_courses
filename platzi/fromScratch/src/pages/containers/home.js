import React, { Component } from 'react';
import HomeLayout from '../components/home-layout';
import Categories from '../../categories/components/categories.js';
import Related from '../components/related';
import ModalContainer from '../../widget/containers/modal.js';
import Modal from '../../widget/components/modal.js'

class Home extends Component {
  state = {
    modalVisible: false,
  }

  handleOpenModal = (media) => {
    this.setSate({
      modalVisible: true,
      media
    })
  }

  handleCloseModal = (event) => {
    this.setState({
      modalVisible: false,
    })
  }

  render(){
    return(
      <HomeLayout>
        <Related />
        <Categories
          categories={this.props.data.categories}
          handleOpenModal={this.handleOpenModal}
        />
        {
          this.state.modalVisible &&
          <ModalContainer>
            <Modal
              handleClick={this.handleCloseModal}
            >
              <h1>Modal desde home</h1>
            </Modal>
          </ModalContainer>
        }

      </HomeLayout>
    )
  }
}

export default Home;
