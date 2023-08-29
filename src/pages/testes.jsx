import { Tweet } from "react-tweet";
import {tweets} from "../../tweets.json";

export default function Teste() {
    
    tweets.map(tweet => console.log(tweet.id))
    
    return (
        <div className="flex gap-4">
            { tweets.map((tweet) => (<Tweet id={tweet.id} />)) }

            <Tweet id="1497973702260146176" />
        </div>
    ) 
}