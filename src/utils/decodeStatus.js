export const decodeStatus = (binaryStatus) => {
    binaryStatus = String(binaryStatus).padStart(8, '0');
  
    const statusBits = binaryStatus.split('').map(Number).reverse();
  
    const statusLabels = [
      'Beeper On',
      'ShutDown Active',
      'Test in Progress',
      'UPS Type is Standby',
      'UPS Failed',
      'Bypass/Boost or Buck Active',
      'Battery Low',
      'Utility Fail (Immediate)',
    ];
  
    const decodedStatus = statusBits.map((bit, index) => {
      return `${statusLabels[index]}: ${bit === 1 ? 'ON' : 'OFF'}`;
    });
  
    return decodedStatus.join('\n');
  };
  