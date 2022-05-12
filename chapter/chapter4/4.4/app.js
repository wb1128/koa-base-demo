// Node创建多进程的方式有3种。
// child_process.exec：使用子进程执行命令，缓存子进程的输出并以回调函数参数的形式返回。
// child_process.spawn：使用指定的命令行参数创建新进程。
// child_process.fork：spawn()的特殊形式，应用于子进程中运行的模块，f如ork('./son.js')相当于spawn('node', ['./son.js'])。
// 与spaw通n方法不同的是，fork会在父进程与子进程之间建立一个通信管道，用于进程之间的信。


// 进程通信
// 1）通过Node原生的IPC（Inter-Process Communication，进程间通信）来实现。
// 这种方式比较普遍且通用，一般企业里的项目也是通过这种方式进行进程间通信的

// 简单来说，IPC就是通过共享内存的方式实现进程通信的，
// 使得多个进程可以访问同一个内存空间


// 2）多个进程可以通过Socket进行通信，