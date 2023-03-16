import { Helmet } from 'react-helmet'; 
import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';

export function TestPage() { 
    const [metaData, setMetaData] = useState({});
    const {id} = useParams(); 

    useEffect(() => { 
        let data = {'posting_id':id, 'history_url':'경로 알수없음'}
        fetch('https://api-test.steadhr.com/api/v1/applicant/get-posting-page',  {
            method: 'POST', // *GET, POST, PUT, DELETE 등
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                "Content-Type": `application/json`,
                "Accept": `application/json`,
            },
            body: JSON.stringify(data),
        }) 
        .then(response => response.json()) 
        .then(data => setMetaData(data.data)); 
    }, []); 

    console.log(metaData)

    return ( 
    <div> 
        <Helmet> 
            <title>{metaData.title}</title> 
            <meta name="description" content={metaData.enterprise_name} /> 
            <meta property="og:title" content={metaData.posting_field} /> 
            <meta property="og:description" content={metaData.posting_position} /> 
            <meta property="og:image" content={metaData.enterprise_background} /> 
        </Helmet> 
            테스트페이지
    </div> 
    ); 
} 
