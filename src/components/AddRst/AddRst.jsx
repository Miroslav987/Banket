import React, { useState } from 'react';
import './AddRst.scss'

const AddRst = () => {

  function uploadInput() {
      let updInput = document.querySelector('.upload-input')
      updInput.click()
  }

  function getImageData(id) {
    let updInput = document.querySelector('.upload-input')
    let files = updInput.files[0];

    if (files) {
      let fileReader = new FileReader()

      fileReader.readAsDataURL(files)

      fileReader.onload = function () {
          let updImage = document.querySelectorAll('.upload-image')
          updImage.forEach((item) => {
            item.classList.add('active');
            item.src = this.result;
          })
      }
    }
  }

  return (
    <div  className='addProduct'>
      <h1 style={{fontWeight: 500, fontSize: '32px'}} >Добавить Заведение</h1>
      <p className='addProduct_text' >Создайте уникальную страницу своего заведения, чтобы получить возможность рассказать о нем многомиллионной аудитории и увеличить посещаемость.</p>
      <div style={{paddingTop: '1rem'}} className='add_block'>
          <div className="addContent">
             <h1 style={{fontWeight: 500, fontSize: '32px'}} >О Заведение</h1>
             <form >
                <label style={{display: 'block', fontSize: '20px', paddingTop: '1rem' }} htmlFor="">Название заведения</label>
                <input className='add_input' type="text" />

                <label className='add_label' htmlFor="">Тип кухни</label>
                <input className='add_input' type="text" />

                <label className='add_label'htmlFor="">Город</label>
                <input className='add_input' type="text" />

                <label className='add_label' htmlFor="">Адрес</label>
                <input className='add_input' type="text" />

                <label className='add_label' htmlFor="">Телефон заведения*</label>
                <input className='add_input' type="text" />

                <label className='add_label' htmlFor="">Вместимость</label>
                <input className='add_input' type="text" />

                <label className='add_label' htmlFor="">Средний чек</label>
                <input className='add_input' type="text" />

                <label className='add_label' htmlFor="">Режим работы</label>
                <input className='add_input' type="text" />

                <label className='add_label' htmlFor="">Дополнительное</label>
                <input className='add_input_plus' type="text" />
             </form>
          </div>

          <div className='addImages'>
           <div onClick={uploadInput} className="upload-block">
              <input onChange={getImageData} className='upload-input' type="file" />
              <div className='upload-messege' >
                  No file choose
              </div>
              <img src="" alt="" className='upload-image' />
           </div>

           <div onClick={uploadInput} className="upload-block">
              <div className='upload-messege' >
                  No file choose
              </div>
              <img src="" alt="" className='upload-image' />
           </div>

           <div onClick={uploadInput} className="upload-block">
              <div className='upload-messege' >
                  No file choose
              </div>
              <img src="" alt="" className='upload-image' />
           </div>

           <div onClick={uploadInput} className="upload-block">
              <div className='upload-messege' >
                  No file choose
              </div>
              <img src="" alt="" className='upload-image' />
           </div>

           <div onClick={uploadInput} className="upload-block">
              <div className='upload-messege' >
                  No file choose
              </div>
              <img src="" alt="" className='upload-image' />
           </div>

           <div onClick={uploadInput} className="upload-block">
              <div className='upload-messege' >
                  No file choose
              </div>
              <img src="" alt="" className='upload-image' />
           </div>
          </div>
      </div>
      <div className="btns_block">
          <button className="add_btn">Добавить</button>
      </div>
    </div>
  )
}

export default AddRst