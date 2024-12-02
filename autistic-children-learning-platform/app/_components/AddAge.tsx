"use client";

import { useFormStatus } from "react-dom";
import { addAgeAction } from "../_lib/actions";
import { auth } from "../_lib/auth";

export function AddAge() {
  return (
    <div>
      <form action={addAgeAction}>
        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age
          </label>
          <input
            type="number"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            id="age"
            name="age"
            aria-describedby="age"
            placeholder="Enter age"
          />
        </div>
        <Button />
      </form>
    </div>
  );
}

function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
    >
      Add Age
    </button>
  );
}
