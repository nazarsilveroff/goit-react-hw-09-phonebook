import React, { useEffect } from "react";
import Contacts from "./Contacts/Contacts";
import ClientsFilter from "./Form/Filter/filter";
import FormContact from "./Form/Form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContacts } from "../hooks/useContacts";

const PhoneBook = () => {
  const { getAllContact } = useContacts();

  useEffect(() => {
    getAllContact();
  }, [getAllContact]);
  return (
    <>
      <div className="flex flex-col h-screen bg-gray-100">
        <div className="grid place-items-center mx-2 my-20 sm:my-auto">
          <div
            className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
              px-6 py-10 sm:px-10 sm:py-6
              bg-white rounded-lg shadow-md lg:shadow-lg"
          >
            <ToastContainer />
            <h1 className="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
              Phonebook
            </h1>
            <FormContact />
            <ClientsFilter />
            <Contacts />
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneBook;
