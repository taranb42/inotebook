import React, { useContext, useState } from "react";
import { Link, json } from "react-router-dom";
import { HomeContextAPI } from "../services/HomeContext";

const Projects = () => {

    const [data, setData] = useState({
      title: "",
      description: "",
      tag: "",

    });
  
    const { addnote } = useContext(HomeContextAPI);
  
    const handleChange = (event) => {
      setData({ ...data, [event.target.name]: event.target.value });
    };
  
  const createusernote = async (event) => {
    event.preventDefault();
  
    const Json = await addnote( data.title,data.description,data.tag)
    console.log(Json);

    if (Json) {
      alert("Success")
      setData({
        title: "",
        description: "",
        tag: "",
      })
    }

  };



  return (
    <section class="bg-gray-100">
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div class="lg:col-span-2 lg:py-12">
            <p class="max-w-xl text-lg">
              R Systems always believes that it should contribute more to
              certain sections of the society, which are socially weaken and
              deprived. Continuing the journey of working for the wellbeing of
              society
            </p>

            <div class="mt-8">
              <a href="" class="text-2xl font-bold text-blue-600">
                0151 475 4450
              </a>

              <address class="mt-2 not-italic">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
          </div>

          <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form onSubmit={createusernote} class="space-y-4">
              <div>
                <label class="sr-only" for="name">
                  Title
                </label>
                <input
                  class="w-full rounded-lg border-2 border-black p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                  name="title"
                  value={data.title}
                  onChange={handleChange}
                />
              </div>

              <div>
                <label class="sr-only" for="message">
                  Message
                </label>

                <textarea
                  class="w-full rounded-lg border-2 border-black p-3 text-sm"
                  placeholder="Message"
                  rows="8"
                  id="message"
                  name="description"
                  value={data.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div>
                <label class="sr-only" for="name">
                  Tag
                </label>
                <input
                  class="w-full rounded-lg border-2 border-black p-3 text-sm"
                  placeholder="Tag"
                  type="text"
                  id="name"
                  name="tag"
                  value={data.tag}
                  onChange={handleChange}
                />
              </div>


              <div class="mt-4">
                <button
                  type="submit"
                  class="inline-block w-full rounded-lg bg-blue-950 px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>


            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Projects;
