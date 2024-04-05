import React, { useEffect, useState } from "react";
import authAxios from "../../modules/shared/axios/authAxios";
import Header from "@view/layout/Header";
import Message from "@view/shared/message";
import { i18n } from "../../i18n";

function CheckNumber() {
  const [number, setNumber] = useState('');
  const SubmitNumber = () => {
    if (!number || number === '0') {
      Message.error(i18n(`dashboard.numberValidation`));
    } else {
      authAxios
        .post('/number/add', { number: number })
        .then((res) => {
          Message.success(i18n(`dashboard.Success`));

          Message.success(i18n(`dashboard.validation`));
        })
        .catch((error) => {
          Message.error(error.response.data);
        });
    }
  };
  const handleNumericInputChange = (e) => {
    const inputValue = e.target.value;
    const isValidInput = /^(\|-)?\d*$/g.test(inputValue);
    if (isValidInput) {
      setNumber(inputValue);
    } else {
      Message.error(i18n(`dashboard.validation`));
    }
  };

  const searchNumber = () => {
    if (!number || number === '0') {
      Message.error(i18n(`dashboard.numberValidation`));
    } else {
      authAxios
        .post('/number/check', { number: number })
        .then((res) => {
          Message.error(i18n(`dashboard.notFound`));
          // i18n('user.fields.rememberMe')
        })
        .catch((error) => {
          Message.error(error.response.data);
        });
    }
  };

  return (
    <div className="app__">
      <Header />
      <div className="search__item">
        <h1 className="search__title">
          Search.<span>PH</span>
        </h1>
        <div className="app__search">
          <div className="pt-10 pb-5">
            <div className="input__search">
              <input
                type="text"
                placeholder={i18n('dashboard.labelphone')}
                className="search"
                name="number"
                value={number}
                onChange={handleNumericInputChange}
              />
              <div className="check__group" onClick={() => searchNumber()}>
                <div className="Check">
                  <i className="fas fa-search"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="valider" onClick={() => SubmitNumber()}>
            <i className="fas fa-plus size"></i>
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default CheckNumber;
