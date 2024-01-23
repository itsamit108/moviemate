import ContactForm from "@/app/components/ContactForm";
import styles from "./contact.module.css";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>
                    <ContactForm />
                </section>
            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13497.775707026316!2d78.02461625826163!3d32.24613608223663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3906a40ef42dc09b%3A0x52b583a91132a239!2sSpiti%20Valley%2C%20Marango%20Rangarik%2C%20Himachal%20Pradesh%20172114!5e0!3m2!1sen!2sin!4v1684675518161!5m2!1sen!2sin"
                width={100} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" className={styles.mapping}
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
};

export default Contact;
