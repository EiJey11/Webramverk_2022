import './Services.css'

const Services = () => {
    return (
        <div className='container_services'>
            <div className='services_content'>
                <h1>Services</h1>
                <p>RED-Moon  provides a multi channel lead generation service.</p>
                <div className='services_description'>
                    <div>
                        <h3>Web development</h3>
                        <hr className='hr_services'></hr>
                        <p>Description</p>
                    </div>
                    <div>
                        <h3>Web design</h3>
                        <hr className='hr_services'></hr>
                        <p>Description</p>
                    </div>
                    <div>
                        <h3>SEO optimization</h3>
                        <hr className='hr_services'></hr>
                        <p>Description</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Services}