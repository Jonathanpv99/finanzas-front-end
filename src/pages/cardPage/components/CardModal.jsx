import { useState } from "react";
import CustomModal from "../../../components/CustomModal";

const CardModal = ( props ) => {

    const [ modalIsOpen, setModalIsOpen ] = useState( false );

    const openModal = () => {
        setModalIsOpen(true);
      };
    
      const closeModal = () => {
        setModalIsOpen(false);
      };

    return (
        <div>
            <CustomModal isOpen={modalIsOpen} closeModal={closeModal}>
                <form action="">
                    <p>Hola usuario </p>
                    <input type="text" />
                </form>
            </CustomModal>

        </div>
    );
}