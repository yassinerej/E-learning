import React from "react";

export default function ForgetPass() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="cursor-pointer text-red-500 hover:underline"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Mot de passe oublié ?
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Forgot Your Password?
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        Please enter your email so we can send you a new temporary password
                                        so you can log in for now and change it later if you want to.
                                        This process may take few minutes (also check spam).
                                    </p>
                                    <form>
                                        <div className="mt-8">
                                            <div className="flex justify-between items-center">
                                                <div className="text-sm font-bold text-gray-700 tracking-wide">
                                                    Email
                                                </div>
                                            </div>
                                            <input className="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500" type="" placeholder="Enter your Email" />
                                        </div>
                                        <div class="text-center">
                                            <a
                                                class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                                href="/Signup"
                                            >
                                                Create An Account !
                                            </a>
                                        </div>
                                        <div class="text-center">
                                            <a
                                                class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                                href="/Login"
                                            >
                                                Si vous avez déjà un compte Connecter!
                                            </a>
                                        </div>
                                    </form>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
