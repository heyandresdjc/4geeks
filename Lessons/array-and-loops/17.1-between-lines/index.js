let emails = [
    {
        subject: "Meeting",
        body: "Fusce porttitor ultricies turpis, vel tincidunt magna feugiat ac. Quisque eros enim, faucibus eget neque eget, faucibus venenatis urna. Curabitur vestibulum mauris odio, id cursus ex pulvinar et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus volutpat ultricies sapien eget mattis. wer 8666 Aenean vitae sapien dui. Fusce in scelerisque est. Aliquam erat volutpat. Sed aliquam, odio at volutpat laoreet, magna libero ultrices nisi, ut euismod justo est in augue. Fusce ullamcorper posuere magna eget euismod. Donec venenatis sit amet nibh sit amet ornare. Ut ac sem sed orci facilisis facilisis in at augue. Fusce sit amet sapien eget risus eleifend ultricies a ac elit. Integer interdum arcu vel auctor semper."
    },
    {
        subject: "deployment",
        body: "Fusce porttitor ultricies turpis, vel tincidunt magna feugiat ac. Quisque eros enim, faucibus eget neque eget, faucibus venenatis urna. Curabitur vestibulum mauris odio, id cursus ex pulvinar et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus volutpat ultricies sapien eget mattis. wer 8666 Aenean vitae sapien dui. Fusce in scelerisque est. Aliquam erat volutpat. Sed aliquam, odio at volutpat laoreet, magna libero ultrices nisi, ut euismod justo est in augue. Fusce ullamcorper posuere magna eget euismod. Donec venenatis sit amet nibh sit amet ornare. Ut ac sem sed orci facilisis facilisis in at augue. Fusce sit amet sapien eget risus eleifend ultricies a ac elit. Integer interdum arcu vel auctor semper."
    },
    {
        subject: "meeting",
        body: "Fusce porttitor ultricies turpis, vel tincidunt magna feugiat ac. Quisque eros enim, faucibus eget neque eget, faucibus venenatis urna. Curabitur vestibulum mauris odio, id cursus ex pulvinar et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus volutpat ultricies sapien eget mattis. wer 8666 Aenean vitae sapien dui. Fusce in scelerisque est. Aliquam erat volutpat. Sed aliquam, odio at volutpat laoreet, magna libero ultrices nisi, ut euismod justo est in augue. Fusce ullamcorper posuere magna eget euismod. Donec venenatis sit amet nibh sit amet ornare. Ut ac sem sed orci facilisis facilisis in at augue. Fusce sit amet sapien eget risus eleifend ultricies a ac elit. Integer interdum arcu vel auctor semper."
    },
    {
        subject: "budget",
        body: "Fusce porttitor ultricies turpis, vel tincidunt magna feugiat ac. Quisque eros enim, faucibus eget neque eget, faucibus venenatis urna. Curabitur vestibulum mauris odio, id cursus ex pulvinar et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus volutpat ultricies sapien eget mattis. wer 8666 Aenean vitae sapien dui. Fusce in scelerisque est. Aliquam erat volutpat. Sed aliquam, odio at volutpat laoreet, magna libero ultrices nisi, ut euismod justo est in augue. Fusce ullamcorper posuere magna eget euismod. Donec venenatis sit amet nibh sit amet ornare. Ut ac sem sed orci facilisis facilisis in at augue. Fusce sit amet sapien eget risus eleifend ultricies a ac elit. Integer interdum arcu vel auctor semper."
    },
    {
        subject: "deployment",
        body: "Fusce porttitor ultricies turpis, vel tincidunt magna feugiat ac. Quisque eros enim, faucibus eget neque eget, faucibus venenatis urna. Curabitur vestibulum mauris odio, id cursus ex pulvinar et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus volutpat ultricies sapien eget mattis. wer 8666 Aenean vitae sapien dui. Fusce in scelerisque est. Aliquam erat volutpat. Sed aliquam, odio at volutpat laoreet, magna libero ultrices nisi, ut euismod justo est in augue. Fusce ullamcorper posuere magna eget euismod. Donec venenatis sit amet nibh sit amet ornare. Ut ac sem sed orci facilisis facilisis in at augue. Fusce sit amet sapien eget risus eleifend ultricies a ac elit. Integer interdum arcu vel auctor semper."
    }
]

stats = {
    meeting_counter: 0,
    deploy_counter: 0,
    budget_counter: 0
}
for (const key in emails) {
    const element = emails[key];
    switch (element.subject) {
        case "meeting":
            stats.meeting_counter++
            break;

        case "deployment":
            stats.deploy_counter++
            break;

        case "budget":
            stats.budget_counter++
            break;
    }
}

console.log(stats)