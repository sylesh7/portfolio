import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Timestone',
    description: 'Built a decentralized time capsule platform that secures digital memories using blockchain, IPFS storage, and time-lock mechanisms with post-quantum cryptography (Kyber-768).',
    liveUrl: 'https://timestone-pink.vercel.app',
    codeUrl: 'https://github.com/sylesh7/Timestone',
  },
  {
    title: 'Proof of Experience (PoX)',
    description: 'A decentralized app that turns event attendance into verifiable on-chain soulbound NFTs, integrated with Google Calendar and Gmail via Civic Auth.',
    liveUrl: 'https://proof-of-experience-pox.vercel.app',
    codeUrl: 'https://github.com/sylesh7/Proof_of_experience-POX',
  },
  {
    title: 'NFT Treasury',
    description: 'Developed a gated NFT membership website using Web3 that grants exclusive access to users holding ERC-721 NFTs, implementing secure wallet authentication via MetaMask and blockchain verification.',
    liveUrl: 'https://nft-treasury-new.vercel.app/',
    codeUrl: 'https://github.com/Suganthan96/NFT-Treasury',
  },
  {
    title: 'FlappySol',
    description: 'Built a Web3 Solana dApp using React, Rust, and Anchor to store game high scores securely on-chain, integrating Solana Wallet Adapter for authentication and real-time transactions.',
    liveUrl: 'https://flappy-sol-ebon.vercel.app',
    codeUrl: 'https://github.com/sylesh7/FlappySol',
  },
  {
    title: 'Cryptolance',
    description: 'An intelligent freelance marketplace powered by AI agents that match clients with freelancers and handle secure payments on the UMI Network blockchain.',
    liveUrl: 'https://crypto-tasks-eight.vercel.app/',
    codeUrl: 'https://github.com/Suganthan96/CryptoTasks',
  },
  {
    title: 'Vision Aid',
    description: 'Built a navigation prototype for the visually impaired using Arduino and voice assistance; trained a PyTorch model for object detection, winning 2nd place at Envision.',
    codeUrl: 'https://github.com/Arul6851/BlindSpot/tree/main',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="inline-block rounded-lg bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
            My Work
          </div>
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Here are some of the projects I'm proud to have worked on. Each one represents a unique challenge and a learning opportunity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 animate-in fade-in-20 duration-500">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
