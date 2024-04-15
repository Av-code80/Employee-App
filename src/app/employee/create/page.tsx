/**
 * CreateEmployeePage Component
 * @description Provides a form to create a new employee. It handles state management, form submission, and user feedback for errors.
 * @returns {React.Component} The React component for creating an employee.
 */
"use client";
import { useCreateEmployee } from "@/domain/hooks/useCreateEmployee.hook";
import React, { useState } from "react";

export default function CreateEmployeePage() {
  const { mutate: createEmployee, isError, error } = useCreateEmployee();

  if (isError && error instanceof Error) {
    return (
      <div role="alert" className="flex h-screen justify-center items-center">
        <div className="bg-red-500 text-white font-bold rounded-lg p-3 shadow-lg animate-pulse">
          {error.message}
        </div>
      </div>
    );
  }

  return (
    <main className="flex h-screen justify-center items-center p-4 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300">
      <div className="w-full max-w-md p-6 rounded-lg shadow-lg bg-white">
        <h1 className="text-2xl font-bold mb-4 text-sky-800 text-center">
          Create Employee
        </h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-neutral-600"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              aria-required="true"
            />
          </div>
          <div>
            <label
              htmlFor="salary"
              className="block text-sm font-medium text-neutral-600"
            >
              Salary
            </label>
            <input
              type="text"
              name="salary"
              id="salary"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              aria-required="true"
            />
          </div>
          <div>
            <label
              htmlFor="age"
              className="block text-sm font-medium text-neutral-600"
            >
              Age
            </label>
            <input
              type="text"
              name="age"
              id="age"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              aria-required="true"
            />
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:bg-gradient-to-r hover:from-pink-600  hover:via-purple-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create
          </button>
        </form>
      </div>
    </main>
  );
}