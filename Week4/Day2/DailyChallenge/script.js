const videoData = [
    { title: "War and Peace", uploader: "Nils Barsikovich", time: 100500 },
    { title: "Harry Potter", uploader: "Vesta", time: 60 },
    { title: "The Matrix Explained", uploader: "Neo_77", time: 3000 },
    { title: "How to Train Your Dragon IRL", uploader: "ToothlessFan", time: 1500 },
    { title: "Cat vs Cucumber Compilation", uploader: "MemeLord3000", time: 500 }
]

class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`);
    }
}

const video1 = new Video("War and Peace", "Nils Barsikovich", 100500);
video1.watch();
const video2 = new Video("Harry Potter", "Vesta", 60);

let videos = [];
for(let x of videoData){
    videos.push(new Video(x.title,x.uploader,x.time));
}

console.log(videos);

