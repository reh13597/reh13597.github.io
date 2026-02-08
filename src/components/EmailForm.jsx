import emailjs from 'emailjs-com';
import { useEffect, useState } from 'react';

export default function EmailForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(
            serviceID,
            templateID,
            e.target,
            publicKey
        ).then(
            () => setShowSuccessMessage(true),
            () => setShowErrorMessage(true)
        )

        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }

    useEffect(() => {
        const showTimeout = setTimeout(() => setIsVisible(true), 300)
        const showSuccess = setTimeout(() => setShowSuccessMessage(false), 5000)
        const showError = setTimeout(() => setShowErrorMessage(false), 5000)

        return () => {
            clearTimeout(showTimeout);
            clearTimeout(showSuccess);
            clearTimeout(showError);
        }
    })

    return(
        <form onSubmit={handleSubmit} className="grid">
            <div className="grid grid-cols-2 gap-5">
                <fieldset className="fieldset w-full">
                    <legend
                        className="fieldset-legend text-lg cursor-default select-none">
                        Name
                    </legend>
                    <input
                        type="text"
                        name="from_name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input w-full"
                        required
                    />
                </fieldset>
                <fieldset className="fieldset w-full transition">
                    <legend
                        className="fieldset-legend text-lg cursor-default select-none">
                        Email
                    </legend>
                    <input
                        type="email"
                        name="from_email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input w-full"
                        required
                    />
                </fieldset>
            </div>
            <fieldset className="fieldset transition">
                <legend
                    className="fieldset-legend text-lg cursor-default select-none">
                    Subject
                </legend>
                <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="input w-full"
                    required
                />
            </fieldset>
            <fieldset className="fieldset transition">
                <legend
                    className="fieldset-legend text-lg cursor-default select-none">
                    Message
                </legend>
                <textarea
                    type="text"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="textarea h-30 w-full overflow-y-auto"
                    required>
                </textarea>
            </fieldset>
            <div className="flex justify-center mb-15 transition">
                <button
                    type="submit"
                    className="btn btn-lg btn-soft btn-primary w-[50%] mt-5 text-xl text-base-content transition duration-200 hover:scale-105 hover:text-base-300">
                    Send!
                </button>
            </div>
            {showSuccessMessage && (
                <div role="alert" className="alert bg-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>Your message was sent successfully!</span>
                </div>
            )}
            {showErrorMessage && (
                <div role="alert" className="alert bg-error">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>Error: Your message was not sent, try again.</span>
                </div>
            )}
        </form>
    );
}

