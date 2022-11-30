import React, { useState, useEffect } from "react";

function YoutubeVideos() {
	const [youTubeVideo, setyouTubeVideo] = useState([]);
	useEffect(() => {
		fetch(
			// `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCLerHNV1kV0ymza01E_sj3eOFyFU4hLOM&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9

			`https://www.googleapis.com/youtube/v3/search?key=AIzaSyDlrJmLS8qmhiA5HLUbqavx7MF3N1UMWWk&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9`
		)
			.then((response) => response.json())
			.then((data) => {
				const videos = data.items;
				setyouTubeVideo(videos);
			});
	}, []);
	return (
		<section className="youtubeVideosWrapper">
			<div className="allVideosWrapper">
				<div className="container">
					<div className="row justify-content-center text-center">
						<div className="col-12">
							<div className="title-wraper">
								Latest Videos <br />
								<br />
							</div>
						</div>

						{youTubeVideo?.map((singleVideo, i) => {
							let vidId = singleVideo.id.videoId;
							let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
							let videoWrapper = (
								<div key={i} className="col-sm-12 col-md-6 col-lg-4">
									<div className="singleVideoWrapper">
										<div className="videoThumbnail">
											<a href={vidLink} target="_blank" rel="noreferrer">
												<img
													src={singleVideo.snippet.thumbnails.high.url}
													alt="thumbnails"
												/>
											</a>
										</div>
										<div className="videoInfoWrapper">
											<div className="videoTitle">
												<a href={vidLink} target="_blank" rel="noreferrer">
													{singleVideo.snippet.title}
												</a>
											</div>
											<div className="videoDesc">
												{singleVideo.snippet.description}
											</div>
										</div>
									</div>
								</div>
							);
							return videoWrapper;
						})}
					</div>
				</div>
			</div>
			<br />
			<br />
		</section>
	);
}

export default YoutubeVideos;

//key

// AIzaSyCLerHNV1kV0ymza01E_sj3eOFyFU4hLOM;

// https://www.googleapis.com/youtube/v3/channels?key=AIzaSyCLerHNV1kV0ymza01E_sj3eOFyFU4hLOM&forUsername=Apple&part=id

// 			https://www.googleapis.com/youtube/v3/channels?key=AIzaSyB4xNW_TeLDTO9tKxmHQAZskoy9Na0sxR0&forUsername=Apple&part=id

// 				id = UCE_M8A5yxnLfW0KghEeajjw

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyDlrJmLS8qmhiA5HLUbqavx7MF3N1UMWWk&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=9

// "id": "UCE_M8A5yxnLfW0KghEeajjw"
