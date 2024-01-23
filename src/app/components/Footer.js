import footerStyles from '@/app/styles/footer.module.css';

export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
};

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.content}>
                <div className={footerStyles.top}>
                    <div className={footerStyles['logo-details']}>
                        <span className={footerStyles.logo_name}>MovieMate</span>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
