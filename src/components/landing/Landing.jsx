import land from '../../images/landing.jpg';
import styles from './landing.module.css';
import Typewriter from 'typewriter-effect';
export default function Landing() {
    return (
        <div className="relative">
            <div className={`relative ${styles.imageContainer}`}>
                <img src={land} className="w-full h-auto" alt='landing' />
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-2xl text-center z-10">
                    <div className="text-5xl">
                        <Typewriter
                        options={{
                            strings: ['Chakaralaya Analytics', 'Connecting Businesses across the World'],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </div>
                    <div className="text-3xl my-5 py-5 ">
                    Your Path to Data Driven Excellence with Our Business Intelligence Solutions.
                    </div>
                </div>
            </div>
        </div>
    );
}

