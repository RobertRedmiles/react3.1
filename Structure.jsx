import './Structure.css';

function Structure() {
    return(
        <>
            <h3 className='gallery'>Photo Gallery</h3>

            <section className="structureContainer">
                <div className="artGallery">
                    <img src="https://images.unsplash.com/photo-1482685945432-29a7abf2f466?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0ZXJmYWxsfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60" alt="Photos of work"/>
                    <p>Waterfall</p>
                </div>

                <div className="artGallery">
                    <img src="https://images.unsplash.com/photo-1619266465172-02a857c3556d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80" alt="Photos of work"/>
                    <p>Volcano</p>
                </div>

                <div className="artGallery">
                    <img src="https://media.istockphoto.com/id/1440503559/photo/forest-sunlight.jpg?s=612x612&w=is&k=20&c=bMOqyQ2fUrNV7zCt_4SFjsmEjW4Z5PVhQ_ska7vXmCY=" alt="Photos of work"/>
                    <p>Trees</p>
                </div>
            </section>
        </>
    )
}

export default Structure;