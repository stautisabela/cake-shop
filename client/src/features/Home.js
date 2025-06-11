import './Home.css';


export default function Home() {
    return (
        <main>
            <section>
                <div className='cover'></div>
            </section>
            <section className="intro-text">
                {/* inlcude image */}
            </section>
            <section className='intro'>
                <div className='about-us'>
                    <p>Integer tincidunt eu massa at pharetra. Donec cursus enim vitae quam rhoncus, nec congue lacus fringilla. Cras tincidunt nisi tellus, nec ultricies nunc imperdiet nec. Praesent felis neque, interdum at consequat eu, congue maximus augue. Pellentesque iaculis tempor ultrices. In vehicula ut massa et pulvinar. Cras in lorem id eros blandit fringilla.</p>
                </div>
                <div className='services'>
                    <h2>Our services</h2>
                    <div className='services-list'>

                    </div>
                </div>

            </section>
            <section className="how-to-order">
                <h2>How to order</h2>
                    <div className="order-steps">
                    <div className="order-step"> {/* list item  */}
                        <h2>Standard design</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie pharetra odio a iaculis. Nunc vehicula, justo non tincidunt volutpat, magna dolor pellentesque ante, eu egestas augue eros vitae sapien.
                        </p>
                    </div>
                    <div className="order-step"> {/* list item  */}
                        <h2>Custom design</h2>
                        <p>
                            Suspendisse in odio sit amet dui consequat placerat. Phasellus scelerisque ante mi, efficitur venenatis enim laoreet ut. Aliquam sapien neque, pulvinar sed sagittis at, maximus quis diam. Vivamus nunc nisl, congue sit amet odio in, aliquam tincidunt enim.
                        </p>
                    </div>
                    <div className="order-step"> {/* list item  */}
                        <h2>Payment & Pick-up</h2>
                        <p>
                            Curabitur nunc nulla, dictum ac ultricies vitae, venenatis vitae ipsum. Ut iaculis blandit tellus at fermentum.
                        </p>
                    </div>
                </div>
                
            </section>
        </main>
    )
}