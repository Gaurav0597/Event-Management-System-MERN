import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TechEventDataPost } from '../../Redux/Action'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddTechEvent = () => {
  const dispatch = useDispatch()
  const [addEvent, setAddEvent] = useState({
    EventName: '',
    EventImage: '',
    Introduction: '',
    Date: '',
    Time: '',
    Platform: '',
    Participant: null,
    Prize1: null,
    Prize2: null,
    Fees: null,
    Rule1: '',
    Rule2: '',
    Rule3: '',
    Rule4: '',
    Rule5: '',
  })
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(addEvent)
    dispatch(TechEventDataPost(addEvent,toast))
  }
  return (
    <div className="w-3/5 m-auto mt-16 border-zinc-400 border p-8 rounded-2xl ">
      <h1
        className="title text-4xl font-semibold  text-sky-500 pb-4 ml-4 mt-0 text-center"
        style={{ fontFamily: 'Quicksand' }}
      >
         Add Technical Event Here
      </h1>{' '}
      <form>
        <div class="grid gap-4 mb-6 md:grid-cols-2">
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              EventName
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Event Name Here"
              required
              onChange={(event) => {
                setAddEvent({ ...addEvent, EventName: event.target.value })
              }}
            />
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              PlatForm
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Platform here"
              required
              onChange={(event) => {
                setAddEvent({ ...addEvent, Platform: event.target.value })
              }}
            />
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              EventImage
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add  Event Image Here"
              required
              onChange={(event) => {
                setAddEvent({ ...addEvent, EventImage: event.target.value })
              }}
            />
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Participant
            </label>
            <input
              type="number"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Participant here"
              required
              onChange={(event) => {
                setAddEvent({ ...addEvent, Participant: event.target.value })
              }}
            />
          </div>
          <div>
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Introduction
            </label>
            <input
              type="text"
              id="first_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Introduction Here"
              required
              onChange={(event) => {
                setAddEvent({ ...addEvent, Introduction: event.target.value })
              }}
            />
          </div>
          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Prize 1
            </label>
            <input
              type="number"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Prize 1 here"
              required
              onChange={(event) => {
                setAddEvent({ ...addEvent, Prize1: event.target.value })
              }}
            />
          </div>
          <div>
            <label
              for="company"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Date
            </label>
            <input
              type="text"
              id="company"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter data here"
              required
              onChange={(event) => {
                setAddEvent({ ...addEvent, Date: event.target.value })
              }}
            />
          </div>
          <div>
            <label
              for="phone"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Prize 2
            </label>
            <input
              type="number"
              id="phone"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Prize 2 here"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              required
              onChange={(event) => {
                setAddEvent({ ...addEvent, Prize2: event.target.value })
              }}
            />
          </div>
          <div>
            <label
              for="website"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Time
            </label>
            <input
              type="text"
              id="website"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Time here"
              required
              onChange={(event) => {
                setAddEvent({ ...addEvent, Time: event.target.value })
              }}
            />
          </div>
          <div>
            <label
              for="visitors"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Fees
            </label>
            <input
              type="number"
              id="visitors"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Add Fees Here"
              required
              onChange={(event) => {
                setAddEvent({ ...addEvent, Fees: event.target.value })
              }}
            />
          </div>
        </div>

        <div>
          <label
            for="visitors"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Rule 1
          </label>
          <input
            type="text"
            id="visitors"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Rule 1 here"
            required
            onChange={(event) => {
              setAddEvent({ ...addEvent, Rule1: event.target.value })
            }}
          />
        </div>
        <div>
          <label
            for="visitors"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Rule 2
          </label>
          <input
            type="text"
            id="visitors"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Rule 2 here"
            required
            onChange={(event) => {
              setAddEvent({ ...addEvent, Rule2: event.target.value })
            }}
          />
        </div>
        <div>
          <label
            for="visitors"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Rule 3
          </label>
          <input
            type="text"
            id="visitors"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Rule 3 here"
            required
            onChange={(event) => {
              setAddEvent({ ...addEvent, Rule3: event.target.value })
            }}
          />
        </div>
        <div>
          <label
            for="visitors"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Rule 4
          </label>
          <input
            type="text"
            id="visitors"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Rule 4 here"
            required
            onChange={(event) => {
              setAddEvent({ ...addEvent, Rule4: event.target.value })
            }}
          />
        </div>
        <div>
          <label
            for="visitors"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Rule 5
          </label>
          <input
            type="text"
            id="visitors"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Add Rule 5 here"
            required
            onChange={(event) => {
              setAddEvent({ ...addEvent, Rule5: event.target.value })
            }}
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className=" text-white mt-6  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          <ToastContainer/>
        </div>
      </form>
    </div>
  )
}

export default AddTechEvent
