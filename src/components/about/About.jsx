import { Link } from "react-router-dom";
import radoProfilePic from '../../assets/img/rado_profile.jpg';

function About() {
  return (
    <section className="pt-20 pb-48">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Кой сме ние</h2>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              На този етап "и сам войнът е сам"!
            </p>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              Тази страница е авторски проект по курса в SoftUni: React JS, но
              ако проработи... ще започна да го използвам активно и ще изскачат
              бъгове ;)
            </p>
            <p className="text-lg leading-relaxed m-4 text-gray-600">
              Вече има няколко ентусиасти, които да ми помагат в разработката, а
              още повече - да свирим заедно.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap">
          {/*TODO get users with employee role and display them here dynamically*/}
          <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
              <img
                alt="..."
                src={radoProfilePic}
                className="shadow-lg rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
              />
              <div className="pt-6 text-center">
                <h5 className="text-xl font-bold">Радо Михов</h5>
                <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                  Уеб Разработчик, Поет с китара
                </p>
                <div className="mt-6">
                  <button
                    className="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <Link to="https://facebook.com/radomihov">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </button>
                  <button
                    className="bg-gray-900 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
