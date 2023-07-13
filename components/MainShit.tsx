import { useState } from 'react';
import { ethers } from 'ethers';

export default function MainShit() {
  const [address, setAddress] = useState('');
  const [tokens, setTokens] = useState([]);

  const fetchTokens = async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/3b1b88b22ff54eaca0bf66adef568e00');
      const balance = await provider.getBalance(address);
      console.log('Balance:', ethers.utils.formatEther(balance));

      // Perform token fetching logic here using the provider and address
      // ...

      // Set the fetched tokens
      setTokens(fetchedTokens);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter Ethereum/BSC address"
      />
      <button onClick={fetchTokens}>Fetch Tokens</button>

      {/* Display the fetched tokens */}
      {tokens.length > 0 && (
        <ul>
          {tokens.map((token) => (
            <li key={token.id}>{token.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
