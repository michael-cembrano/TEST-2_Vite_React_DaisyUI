import React from "react";

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modals: {
        work: false,
        education: false,
        projects: false,
      },
      expandedCards: {
        senior: false,
        fullstack: false,
        junior: false,
      },
    };
  }

  toggleModal = (modalName) => {
    this.setState((prevState) => ({
      modals: {
        ...prevState.modals,
        [modalName]: !prevState.modals[modalName],
      },
    }));
  };

  toggleCard = (cardName) => {
    this.setState((prevState) => ({
      expandedCards: {
        ...prevState.expandedCards,
        [cardName]: !prevState.expandedCards[cardName],
      },
    }));
  };

  render() {
    return (
      <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center gap-4">
        <button
          onClick={() => this.toggleModal("work")}
          className="btn btn-primary"
        >
          Work Experience
        </button>

        <button
          onClick={() => this.toggleModal("education")}
          className="btn btn-secondary"
        >
          Education
        </button>

        <button
          onClick={() => this.toggleModal("projects")}
          className="btn btn-accent"
        >
          Projects
        </button>

        {/* Work Experience Modal */}
        {this.state.modals.work && (
          <div className="modal modal-open">
            <div className="modal-box relative max-w-3xl">
              <button
                className="btn btn-sm btn-circle absolute right-2 top-2"
                onClick={() => this.toggleModal("work")}
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
              <div className="space-y-4">
                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="card-body">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="card-title flex items-center gap-2">
                          Senior Developer
                          <div className="badge badge-primary">Current</div>
                        </h3>
                        <p className="text-base-content/70">
                          Tech Corp • 2020 - Present
                        </p>
                      </div>
                      <button
                        className="btn btn-ghost btn-sm btn-circle"
                        onClick={() => this.toggleCard("senior")}
                      >
                        {this.state.expandedCards.senior ? "−" : "+"}
                      </button>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        this.state.expandedCards.senior
                          ? "mt-4 h-auto opacity-100"
                          : "h-0 opacity-0"
                      }`}
                    >
                      <ul className="list-disc list-inside space-y-2">
                        <li className="hover:text-primary transition-colors duration-200">
                          Led development of multiple web applications
                        </li>
                        <li className="hover:text-primary transition-colors duration-200">
                          Managed team of 5 junior developers
                        </li>
                        <li className="hover:text-primary transition-colors duration-200">
                          Implemented CI/CD pipelines
                        </li>
                      </ul>
                      <div className="flex gap-2 mt-4 flex-wrap">
                        <div className="badge badge-outline hover:badge-primary transition-colors duration-200">
                          React
                        </div>
                        <div className="badge badge-outline hover:badge-primary transition-colors duration-200">
                          Node.js
                        </div>
                        <div className="badge badge-outline hover:badge-primary transition-colors duration-200">
                          AWS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="card-body">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="card-title">Full Stack Developer</h3>
                        <p className="text-base-content/70">
                          Digital Solutions Inc • 2018 - 2020
                        </p>
                      </div>
                      <button
                        className="btn btn-ghost btn-circle"
                        onClick={() => this.toggleCard("fullstack")}
                      >
                        {this.state.expandedCards.fullstack ? "−" : "+"}
                      </button>
                    </div>

                    <div
                      className={`transition-all duration-300 ${
                        this.state.expandedCards.fullstack
                          ? "max-h-96"
                          : "max-h-0 overflow-hidden"
                      }`}
                    >
                      <ul className="list-disc list-inside space-y-2 mt-4">
                        <li className="hover:text-primary transition-colors">
                          Developed and maintained client websites
                        </li>
                        <li className="hover:text-primary transition-colors">
                          Optimized database performance
                        </li>
                        <li className="hover:text-primary transition-colors">
                          Reduced loading times by 40%
                        </li>
                      </ul>
                      <div className="flex gap-2 mt-4 flex-wrap">
                        <div className="badge badge-outline">Vue.js</div>
                        <div className="badge badge-outline">PHP</div>
                        <div className="badge badge-outline">MySQL</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="card-body">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="card-title">Junior Developer</h3>
                        <p className="text-base-content/70">
                          StartUp Hub • 2016 - 2018
                        </p>
                      </div>
                      <button
                        className="btn btn-ghost btn-circle"
                        onClick={() => this.toggleCard("junior")}
                      >
                        {this.state.expandedCards.junior ? "−" : "+"}
                      </button>
                    </div>

                    <div
                      className={`transition-all duration-300 ${
                        this.state.expandedCards.junior
                          ? "max-h-96"
                          : "max-h-0 overflow-hidden"
                      }`}
                    >
                      <ul className="list-disc list-inside space-y-2 mt-4">
                        <li className="hover:text-primary transition-colors">
                          Built responsive web interfaces
                        </li>
                        <li className="hover:text-primary transition-colors">
                          Collaborated with design team
                        </li>
                        <li className="hover:text-primary transition-colors">
                          Participated in code reviews
                        </li>
                      </ul>
                      <div className="flex gap-2 mt-4 flex-wrap">
                        <div className="badge badge-outline">HTML</div>
                        <div className="badge badge-outline">CSS</div>
                        <div className="badge badge-outline">JavaScript</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Education Modal */}
        {this.state.modals.education && (
          <div className="modal modal-open">
            <div className="modal-box relative">
              <button
                className="btn btn-sm btn-circle absolute right-2 top-2"
                onClick={() => this.toggleModal("education")}
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <div className="space-y-4">
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h3 className="card-title">Computer Science Degree</h3>
                    <p className="text-base-content/70">
                      University Name • 2016 - 2020
                    </p>
                    <p>Major in Software Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Modal */}
        {this.state.modals.projects && (
          <div className="modal modal-open">
            <div className="modal-box relative">
              <button
                className="btn btn-sm btn-circle absolute right-2 top-2"
                onClick={() => this.toggleModal("projects")}
              >
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4">Projects</h2>
              <div className="space-y-4">
                <div className="card bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h3 className="card-title">Portfolio Website</h3>
                    <p className="text-base-content/70">
                      Personal Project • 2023
                    </p>
                    <p>Built using React and TailwindCSS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Experience;
