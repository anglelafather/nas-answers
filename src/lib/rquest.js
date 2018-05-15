import { dappAddress } from "../config/index";
import nebulas from "./nebulas";
import nebPay from './nebPay'

var Account = nebulas.Account,
  neb = new nebulas.Neb();
neb.setRequest(new nebulas.HttpRequest("https://mainnet.nebulas.io"));

export function readData(funName, params) {
  var from = Account.NewAccount().getAddressString();
  var value = "0";
  var nonce = "0"
  var gas_price = "1"
  var gas_limit = "2"
  var contract = {
    "function": funName,
    "args": params
  }

  neb.api.call(from, dappAddress, value, nonce, gas_price, gas_limit, contract).then(function (resp) {

  })
}

export function writeData(funName, params) {
  var value = "0";
  var to = dappAddress;
  var value = "0";
  var intervalQuery;
  var serialNumber = nebPay.call(to, value, funName, params, {    //使用nebpay的call接口去调用合约,
    listener: function (resp) {
      console.log("response of push: " + JSON.stringify(resp))
      intervalQuery = setInterval(function () {
        funcIntervalQuery();
      }, 12000);

      function funcIntervalQuery() {
        nebPay.queryPayInfo(serialNumber)   //search transaction result from server (result upload to server by app)
          .then(function (resp) {
            console.log("tx result: " + resp)   //resp is a JSON string
            var respObject = JSON.parse(resp)
            if (respObject.code === 0) {
              clearInterval(intervalQuery)
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      }
    }        //设置listener, 处理交易返回信息
  });
}