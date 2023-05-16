import React,{ useState } from 'react'
import {PaymentElement} from '@stripe/react-stripe-js';
import { Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";

const CheckoutForm = () => {
  const [Modal, setmodal] = useState(false);

  return (
    <form>
      <PaymentElement />
      <Modal size='lg' isOpen={Modal} toggle = {() => setmodal(!Modal)}>
            <ModalHeader>
                Delivery Details
            </ModalHeader>  
            <ModalBody>
                <form>
                    <Row>
                        <col lg={12} >
                            <div>
                                <Label htmlFor='Contact No. '>
                                    Contact No.
                                </Label>
                                <input
                                type='number'
                                className='form-control'
                                placeholder='Contact'
                                 />
                            </div>
                        </col>

                        <col lg={12}>
                        <div>
                            <Label htmlFor='Address'>
                                Address
                            </Label>
                            <input
                            type='number, text'
                            className='form-control'
                            placeholder='Flat No./House'
                            />
                            <input
                            type='text'
                            className='form-control'
                            placeholder='Street'
                            />
                            <input
                            type='text, number'
                            className='form-control'
                            placeholder='Landmark'
                            />
                            <input
                            type='number'
                            className='form-control'
                            value= '313001'
                            disabled
                            />
                            <input
                            type='text'
                            className='form-control'
                            placeholder='City'
                            />
                            <input
                            type='text'
                            className='form-control'
                            placeholder='State'
                            />
                            </div>
                        </col>
                    </Row>
                </form>
                <button onClick={() => setmodal(true)}>
                Payment
                </button>
            </ModalBody>
        </Modal>
      
      <button>Checkout</button>
    </form>
  )
}

export default CheckoutForm